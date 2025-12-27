# Integration Examples - Utility Components

Praktische Beispiele, wie die Utility-Components zusammen in realen Seiten-Layouts verwendet werden.

---

## Beispiel 1: Skills & Portfolio Sektion

**Szenarien:** Überblick über Skills mit Grid-Layout

```astro
---
import SectionHeading from '@components/molecules/SectionHeading.astro';
import GridSection from '@components/organisms/layout/GridSection.astro';
import CardSection from '@components/organisms/layout/CardSection.astro';
import SkillCard from '@components/molecules/SkillCard.astro';

const skills = [
  { icon: 'vscode', label: 'Web Development' },
  { icon: 'figma', label: 'UI Design' },
  { icon: 'js', label: 'JavaScript' },
  { icon: 'react', label: 'React' },
];
---

<section>
  <SectionHeading
    title="Skills & Technologien"
    subtitle="Werkzeuge und Technologien, mit denen ich arbeite"
    alignment="center"
  />

  <GridSection columns={3} gap="lg">
    {skills.map(skill => (
      <CardSection padding="lg" elevated>
        <SkillCard icon={skill.icon} label={skill.label} />
      </CardSection>
    ))}
  </GridSection>
</section>
```

---

## Beispiel 2: Hero + About Split Section

**Szenario:** Über-mich Sektion mit Text und Bild

```astro
---
import SectionHeading from '@components/molecules/SectionHeading.astro';
import SplitSection from '@components/organisms/layout/SplitSection.astro';
import CardSection from '@components/organisms/layout/CardSection.astro';
---

<section>
  <SectionHeading
    title="Über mich"
    subtitle="Mein Weg in der Webentwicklung"
    alignment="center"
  />

  <SplitSection ratio="60-40" gap="xl">
    <Fragment slot="left">
      <CardSection padding="lg" background="elevated">
        <h3>Eine kurze Geschichte</h3>
        <p>
          Seit 2018 entwickle ich leidenschaftlich gerne Websites
          und Applikationen. Mein Fokus liegt auf benutzer-
          zentriertem Design und sauberer Code-Architektur.
        </p>
        <ul>
          <li>UX/UI Design</li>
          <li>Frontend Entwicklung</li>
          <li>Performance Optimization</li>
        </ul>
      </CardSection>
    </Fragment>

    <Fragment slot="right">
      <img
        src="/images/about-me.jpg"
        alt="Über mich"
        style="border-radius: var(--border-radius-lg);"
      />
    </Fragment>
  </SplitSection>
</section>
```

---

## Beispiel 3: Portfolio Galerie mit Kategorien

**Szenario:** Projekte in flexiblem Grid darstellen

```astro
---
import SectionHeading from '@components/molecules/SectionHeading.astro';
import SplitSection from '@components/organisms/layout/SplitSection.astro';
import GridSection from '@components/organisms/layout/GridSection.astro';
import CardSection from '@components/organisms/layout/CardSection.astro';

const projects = [
  { title: 'E-Commerce Platform', category: 'Full Stack' },
  { title: 'Mobile App Design', category: 'UI Design' },
  { title: 'CMS Integration', category: 'Backend' },
  { title: 'Animation Library', category: 'Frontend' },
  { title: 'Design System', category: 'Design' },
  { title: 'API Development', category: 'Backend' },
];
---

<section>
  <SectionHeading
    title="Mein Portfolio"
    subtitle="Projekte, die ich stolz präsentiere"
  />

  <GridSection columns="auto" gap="md" minWidth="clamp(280px, 100%, 380px)">
    {projects.map(project => (
      <CardSection padding="lg" elevated>
        <span class="project-category">{project.category}</span>
        <h4>{project.title}</h4>
        <p>Kurze Projektbeschreibung...</p>
        <a href="/projects/{project.title}">Mehr →</a>
      </CardSection>
    ))}
  </GridSection>
</section>

<style>
  .project-category {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    text-transform: uppercase;
  }
</style>
```

---

## Beispiel 4: Service Angebote mit erweitert Layout

**Szenario:** Services mit Icon und Beschreibung

```astro
---
import SectionHeading from '@components/molecules/SectionHeading.astro';
import SplitSection from '@components/organisms/layout/SplitSection.astro';
import GridSection from '@components/organisms/layout/GridSection.astro';
import CardSection from '@components/organisms/layout/CardSection.astro';
---

<section>
  <SectionHeading
    title="Meine Services"
    alignment="left"
  />

  <SplitSection ratio="50-50" gap="lg">
    <Fragment slot="left">
      <GridSection columns={2} gap="md">
        <CardSection padding="md">
          <h4>Web Design</h4>
          <p>Modern und responsive Designs</p>
        </CardSection>
        <CardSection padding="md">
          <h4>Frontend Dev</h4>
          <p>React, Vue, Astro & mehr</p>
        </CardSection>
        <CardSection padding="md">
          <h4>UX Optimization</h4>
          <p>Performance & Accessibility</p>
        </CardSection>
        <CardSection padding="md">
          <h4>Consulting</h4>
          <p>Tech-Strategie & Architektur</p>
        </CardSection>
      </GridSection>
    </Fragment>

    <Fragment slot="right">
      <CardSection padding="xl" elevated background="elevated">
        <h3>Warum mit mir arbeiten?</h3>
        <ul>
          <li>Über 5 Jahre Erfahrung</li>
          <li>Design Token Systems</li>
          <li>Performance-fokussiert</li>
          <li>Agile & responsive</li>
        </ul>
      </CardSection>
    </Fragment>
  </SplitSection>
</section>
```

---

## Beispiel 5: Blog Post Übersicht

**Szenario:** Blog-Artikel in Grid darstellen

```astro
---
import SectionHeading from '@components/molecules/SectionHeading.astro';
import GridSection from '@components/organisms/layout/GridSection.astro';
import CardSection from '@components/organisms/layout/CardSection.astro';

const posts = [
  { title: 'Design Tokens Mastery', date: '2025-12-20', read: '5 min' },
  { title: 'Astro Performance Tips', date: '2025-12-15', read: '8 min' },
  { title: 'Responsive Design Pattern', date: '2025-12-10', read: '6 min' },
];
---

<section>
  <SectionHeading
    title="Neueste Blog Posts"
    subtitle="Tipps, Tricks & Insights"
    alignment="center"
  />

  <GridSection columns={3} gap="lg">
    {posts.map(post => (
      <CardSection padding="lg" class="blog-post">
        <time datetime={post.date}>{post.date}</time>
        <h3>{post.title}</h3>
        <p>Kurze Zusammenfassung des Blog-Posts...</p>
        <a href="/blog/{post.title}">Lesen ({post.read})</a>
      </CardSection>
    ))}
  </GridSection>
</section>

<style>
  .blog-post {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .blog-post time {
    color: var(--color-text-secondary);
    font-size: var(--font-size-xs);
  }

  .blog-post h3 {
    margin: 0;
  }

  .blog-post p {
    flex-grow: 1;
  }

  .blog-post a {
    color: var(--color-primary);
    text-decoration: none;
  }

  .blog-post a:hover {
    text-decoration: underline;
  }
</style>
```

---

## Beispiel 6: Testimonials Sektion

**Szenario:** Kundenmeinungen mit Cards

```astro
---
import SectionHeading from '@components/molecules/SectionHeading.astro';
import GridSection from '@components/organisms/layout/GridSection.astro';
import CardSection from '@components/organisms/layout/CardSection.astro';

const testimonials = [
  {
    text: 'Professionel und zuverlässig! Die Website ist genau geworden wie wir es wollten.',
    author: 'Maria Schmidt',
    role: 'CEO, E-Commerce GmbH',
  },
  {
    text: 'Großartige Zusammenarbeit und schnelle Umsetzung. Empfehle gerne weiter!',
    author: 'Thomas Müller',
    role: 'Gründer, Startup XYZ',
  },
];
---

<section>
  <SectionHeading
    title="Was meine Kunden sagen"
    alignment="center"
  />

  <GridSection columns={2} gap="lg">
    {testimonials.map(testimonial => (
      <CardSection padding="lg" elevated>
        <blockquote>
          <p>"{testimonial.text}"</p>
          <footer>
            <strong>{testimonial.author}</strong>
            <small>{testimonial.role}</small>
          </footer>
        </blockquote>
      </CardSection>
    ))}
  </GridSection>
</section>

<style>
  blockquote {
    margin: 0;
  }

  blockquote p {
    font-style: italic;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
  }

  blockquote footer {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  blockquote strong {
    color: var(--color-text-primary);
  }

  blockquote small {
    color: var(--color-text-secondary);
    font-size: var(--font-size-xs);
  }
</style>
```

---

## Beispiel 7: Landing Page Full Stack

**Szenario:** Komplette Landing Page mit allen Components

```astro
---
import Layout from '@layouts/Layout.astro';
import SectionHeading from '@components/molecules/SectionHeading.astro';
import SplitSection from '@components/organisms/layout/SplitSection.astro';
import GridSection from '@components/organisms/layout/GridSection.astro';
import CardSection from '@components/organisms/layout/CardSection.astro';
---

<Layout title="Portfolio">
  <!-- Hero Section -->
  <section class="hero">
    <SplitSection ratio="60-40" gap="xl">
      <Fragment slot="left">
        <SectionHeading
          title="Hi, ich bin Jacqueline"
          subtitle="Full-Stack Developer & Designer"
          alignment="left"
        />
        <p>Ich gestalte digitale Experiences, die Menschen lieben.</p>
        <a href="#contact" class="cta">Kontakt aufnehmen</a>
      </Fragment>

      <Fragment slot="right">
        <img src="/hero.jpg" alt="Hero" />
      </Fragment>
    </SplitSection>
  </section>

  <!-- About Section -->
  <section class="about">
    <SectionHeading
      title="Über mich"
      subtitle="Mein Weg und Fokus"
      alignment="center"
    />
    <SplitSection ratio="50-50" gap="lg" reverse>
      <Fragment slot="left">
        <img src="/about.jpg" alt="About" />
      </Fragment>

      <Fragment slot="right">
        <CardSection padding="lg" background="elevated">
          <p>Seit über 5 Jahren entwickle ich...</p>
        </CardSection>
      </Fragment>
    </SplitSection>
  </section>

  <!-- Skills Section -->
  <section class="skills">
    <SectionHeading
      title="Skills & Technologien"
      subtitle="Tools, mit denen ich arbeite"
      alignment="center"
    />
    <GridSection columns={3} gap="lg">
      <!-- Skills Cards -->
    </GridSection>
  </section>

  <!-- Portfolio Section -->
  <section class="portfolio">
    <SectionHeading
      title="Projekte"
      alignment="center"
    />
    <GridSection columns="auto" gap="md">
      <!-- Project Cards -->
    </GridSection>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <SectionHeading
      title="Interessiert an einer Zusammenarbeit?"
      subtitle="Ich freue mich, von dir zu hören!"
      alignment="center"
    />
    <CardSection padding="xl" elevated class="cta-card">
      <p>Kontaktiere mich für ein unverbindliches Gespräch.</p>
      <a href="mailto:hello@example.com" class="button">Email senden</a>
    </CardSection>
  </section>
</Layout>

<style>
  section {
    padding: var(--spacing-section-vertical) var(--spacing-section-horizontal);
    max-width: var(--container-max-width);
    margin: 0 auto;
  }

  .hero {
    background: var(--color-background-elevated);
  }

  .about {
    background: var(--color-background-base);
  }

  .cta-section {
    background: var(--color-background-elevated);
  }

  .cta-card {
    max-width: 600px;
    margin: var(--spacing-xl) auto;
    text-align: center;
  }
</style>
```

---

## Best Practices bei der Integration

### 1. Section-Struktur
```astro
<!-- RICHTIG: SectionHeading + Layout Container -->
<section>
  <SectionHeading title="..." />
  <SplitSection>
    <!-- Content -->
  </SplitSection>
</section>

<!-- FALSCH: Layout ohne Heading -->
<section>
  <SplitSection>
    <!-- Content ohne Überschrift -->
  </SplitSection>
</section>
```

### 2. Konsistente Abstände
```astro
<!-- RICHTIG: Einheitlicher gap durchgehend -->
<GridSection columns={3} gap="lg">
  {items.map(item => (
    <CardSection padding="lg">
      {item.content}
    </CardSection>
  ))}
</GridSection>

<!-- FALSCH: Unterschiedliche Abstände -->
<GridSection columns={3} gap="md">
  {items.map(item => (
    <CardSection padding="sm">  <!-- ❌ Nicht konsistent -->
      {item.content}
    </CardSection>
  ))}
</GridSection>
```

### 3. Responsive Überlappung
```astro
<!-- RICHTIG: Automatische Responsive-Anpassung -->
<SplitSection ratio="60-40">
  <!-- Wird auf Mobile automatisch gestacked -->
</SplitSection>

<!-- FALSCH: Manuelles Media Query Handling -->
<div style="@media (max-width: 768px) { flex: 1; }">
  <!-- ❌ Component sollte das übernehmen -->
</div>
```

### 4. Richtige Component-Wahl
```astro
<!-- RICHTIG: Component-Sektion bei Bedarf -->
<SplitSection ratio="50-50">
  <Fragment slot="left">...</Fragment>
  <Fragment slot="right">
    <GridSection columns={2}>
      <!-- Nested Grid ist OK -->
    </GridSection>
  </Fragment>
</SplitSection>

<!-- FALSCH: Zu viele Verschachtelungen -->
<GridSection>
  <CardSection>
    <SplitSection>
      <GridSection>
        <!-- ❌ Zu komplex -->
      </GridSection>
    </SplitSection>
  </CardSection>
</GridSection>
```

---

## Performance-Tipps

1. **Statische Inhalte:** Components sind reine Astro-Components (keine JS)
2. **CSS-Optimierung:** Media Queries nur wo nötig
3. **Fluide Skalierung:** Nutze clamp() für responsive Größen
4. **Token-Reuse:** Gleiche Tokens überall verwenden

---

Zuletzt aktualisiert: 2025-12-25
