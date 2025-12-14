import fs from 'node:fs/promises';
import path from 'node:path';

export interface LicenseInfo {
  name: string;
  version: string;
  author: string;
  licenseType: string;
  licenseUrl?: string;
  repository?: string;
  description?: string;
}

const IGNORED_PACKAGES = ['typescript'];

export async function getProjectLicenses(): Promise<LicenseInfo[]> {
  try {
    const rootDir = process.cwd();
    const packageJsonPath = path.join(rootDir, 'package.json');
    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);

    const dependencies = Object.keys(packageJson.dependencies || {});
    const licenses: LicenseInfo[] = [];

    for (const dep of dependencies) {
      if (IGNORED_PACKAGES.includes(dep)) continue;

      try {
        const depPackageJsonPath = path.join(rootDir, 'node_modules', dep, 'package.json');
        const depContent = await fs.readFile(depPackageJsonPath, 'utf-8');
        const depPkg = JSON.parse(depContent);

        // Autor extrahieren (kann String oder Object sein)
        let author = 'Unbekannt';
        if (typeof depPkg.author === 'string') {
          author = depPkg.author;
        } else if (depPkg.author && typeof depPkg.author === 'object') {
          author = depPkg.author.name || 'Unbekannt';
        }

        // Repository URL bereinigen
        let repository = '';
        if (depPkg.repository) {
            const repoUrl = typeof depPkg.repository === 'string' ? depPkg.repository : depPkg.repository.url;
            if (repoUrl) {
                repository = repoUrl.replace(/^git\+/, '').replace(/\.git$/, '');
                // GitHub Links normalisieren
                if (repository.startsWith('ssh://git@github.com/')) {
                    repository = repository.replace('ssh://git@github.com/', 'https://github.com/');
                }
            }
        }

        // Lizenz URL raten (da nicht immer standardisiert im package.json)
        // Fallback auf Repository + LICENSE Datei typische Pfade
        let licenseUrl = '';
        if (repository && repository.startsWith('https://github.com')) {
             licenseUrl = `${repository}/blob/main/LICENSE`;
        } else if (repository && repository.startsWith('https://gitlab.com')) {
             licenseUrl = `${repository}/-/blob/master/LICENSE`;
        }

        licenses.push({
          name: depPkg.name,
          version: depPkg.version,
          author: author,
          licenseType: depPkg.license || 'Unbekannt',
          repository: repository,
          licenseUrl: licenseUrl, // Frontend kann prüfen ob URL valide, oder wir lassen es so
          description: depPkg.description
        });

      } catch (err) {
        console.warn(`Konnte Lizenzinformationen für ${dep} nicht laden:`, err);
      }
    }

    return licenses;
  } catch (error) {
    console.error('Fehler beim Lesen der Lizenzen:', error);
    return [];
  }
}
