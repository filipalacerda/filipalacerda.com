import EducationCard from "../components/education_card";

export default function Education() {
  return (
    <section className="mt-12 md:w-5/12 md:mx-auto">
      <EducationCard
        title="Spanish Level B1.1"
        externalUrl="https://www.ua.pt/pt/dlc/cursos-livres-e-ple"
        date={{
          from: 2020,
          to: 2022,
        }}
        school="Universidade de Aveiro"
      />

      <EducationCard
        title="MSc in Multimedia Communication - Interactive Multimedia"
        externalUrl="https://www.ua.pt/pt/curso/508"
        date={{
          from: 2010,
          to: 2012,
        }}
        school="Universidade de Aveiro"
      />

      <EducationCard
        title="BSc in New Communication Technologies"
        externalUrl="https://www.ua.pt/pt/curso/1531"
        date={{
          from: 2007,
          to: 2010,
        }}
        school="Universidade de Aveiro"
      />
    </section>
  );
}
