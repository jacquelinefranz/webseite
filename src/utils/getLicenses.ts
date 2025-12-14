import fs from 'node:fs/promises';
import path from 'node:path';

export interface LicenseInfo {
  name: string;
  author: string;
  licenseType: string;
  licenseUrl?: string;
  repository?: string;
  description?: string;
}

const IGNORED_PACKAGES = ['typescript'];

const OVERRIDES: Record<string, Partial<LicenseInfo>> = {
    '@iconify-json/mingcute': {
        name: 'MingCute Icon',
        author: 'Richard Hor',
        licenseType: 'Apache-2.0',
        licenseUrl: 'https://github.com/Richard9394/MingCute/blob/main/LICENSE',
        repository: 'https://github.com/Richard9394/MingCute',
        description: 'A simple and exquisite open-source icon library.'
    }
};

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
      
      // Sub-Pakete von Astro ignorieren, da das Hauptpaket "astro" reicht
      if (dep.startsWith('@astrojs/')) continue;

      // Check for Override first
      if (OVERRIDES[dep]) {
          licenses.push({
              name: dep, // Fallback name
              version: '', // Version holen wir trotzdem gleich frisch oder lassen leer
              author: 'Unbekannt',
              licenseType: 'Unbekannt',
              ...OVERRIDES[dep]
          } as LicenseInfo);
          continue; 
      }

      try {
        const depPackageJsonPath = path.join(rootDir, 'node_modules', dep, 'package.json');
        const depContent = await fs.readFile(depPackageJsonPath, 'utf-8');
        const depPkg = JSON.parse(depContent);

        // Autor extrahieren
        let author = 'Community'; // Default, falls nichts gefunden
        
        if (depPkg.author) {
            if (typeof depPkg.author === 'string') {
                // "Name <email> (url)" -> "Name"
                author = depPkg.author.replace(/<.*>/, '').replace(/\(.*\)/, '').trim();
            } else if (typeof depPkg.author === 'object') {
                author = depPkg.author.name || 'Community';
            }
        } else if (depPkg.contributors && Array.isArray(depPkg.contributors) && depPkg.contributors.length > 0) {
             // Fallback auf ersten Contributor
             const contributor = depPkg.contributors[0];
             if (typeof contributor === 'string') {
                 author = contributor.replace(/<.*>/, '').replace(/\(.*\)/, '').trim();
             } else if (typeof contributor === 'object') {
                 author = contributor.name || 'Community';
             }
        } else if (depPkg.maintainers && Array.isArray(depPkg.maintainers) && depPkg.maintainers.length > 0) {
             const maintainer = depPkg.maintainers[0];
             if (typeof maintainer === 'string') {
                 author = maintainer.replace(/<.*>/, '').replace(/\(.*\)/, '').trim();
             } else if (typeof maintainer === 'object') {
                 author = maintainer.name || 'Community';
             }
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

        // Lizenz URL raten
        let licenseUrl = '';
        if (repository && repository.startsWith('https://github.com')) {
             licenseUrl = `${repository}/blob/main/LICENSE`;
        } else if (repository && repository.startsWith('https://gitlab.com')) {
             licenseUrl = `${repository}/-/blob/master/LICENSE`;
        }

        licenses.push({
          name: depPkg.name,
          author: author,
          licenseType: depPkg.license || 'Unbekannt',
          repository: repository,
          licenseUrl: licenseUrl,
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
