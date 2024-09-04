import { DigiTablist, DigiTablistPanel } from "@digi/arbetsformedlingen-react"

export const Navbar = () => {
  return (
    <DigiTablist
      afTabs={[{ "id": "Hem", "title": "Hem" }, { "id": "Sparade", "title": "Sparade" }, { "id": "Diagram", "title": "Diagram" }]}
      afAriaLabel="Detaljer om Yrke"
    >

      <DigiTablistPanel tab="Hem">
        <p>Innehåll som visas när flik "Om Yrket" är aktiv</p>
      </DigiTablistPanel>

      <DigiTablistPanel tab="Sparade">
        <p>Innehåll som visas när flik "Arbetsuppgifter" är aktiv</p>
      </DigiTablistPanel>

      <DigiTablistPanel tab="Diagram">
        <p>Innehåll som visas när flik "Förmågor" är aktiv</p>
      </DigiTablistPanel>
    </DigiTablist>
  )
}
