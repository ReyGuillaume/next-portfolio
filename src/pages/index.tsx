import { Open_Sans, Farro } from "next/font/google";
import NavBar from "@/pages/navbar";
import Image from "next/image";
import sectionImage from "../../public/humaan-dev.jpg";

const primaryFont = Open_Sans({ subsets: ["latin"] });
const secondaryFont = Farro({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className={secondaryFont.className + " w-full h-full bg-header bg-cover"}>
        <NavBar/>
        <div className="h-full flex items-center justify-center">
          <div className="bg-gray-200/75 p-32 text-center">
            <h1 className="pb-12 text-4xl">Guillaume Rey</h1>
            <p className="text-3xl font-semibold">Développeur Web Full-stack</p>
          </div>
        </div>
      </header>
      <main className={primaryFont.className}>
        <section>
          <h2 id={'presentation'}>Faisons connaissance !</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores est maiores minima placeat quam rerum
            suscipit. Atque eveniet explicabo in iusto laborum maiores maxime possimus ratione sint suscipit. Fugiat,
            rerum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid, delectus distinctio dolor dolore dolorum error et expedita id incidunt libero natus perferendis porro praesentium repellat reprehenderit veniam. Beatae corpor
            m nulla num
            is possimus quia quis reprehenderit repudiandae sapiente, soluta totam ut? Consequuntur cupiditate delectus dignissimos doloremque eaque et expedita fuga harum hic ipsam maxime non nulla, odit officia quod quos reiciendis repellat saepe temporibus vitae. Aliquid animi asperiores aspernatur, aut, dicta in maiores nostrum officia quae quas repellendus rerum sit totam voluptas voluptatem voluptates!</p>
          <Image src={sectionImage} alt={''} className="w-[500px] m-auto"/>
        </section>
        <section>
          <h2 id={'competences'}>Mes compétences</h2>
          <div className="flex justify-center gap-24">
            <ul>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum dolor.</li>
            </ul>
            <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum dolor.</li>
            </ul>
          </div>
          <Image src={sectionImage} alt={''} className="w-[500px] m-auto"/>
        </section>
        <section className="flex flex-col items-center">
          <h2 id={'videos'}>Mes dernières vidéos</h2>
          <p>{"Je m'essaie depuis peu à la création de vidéos sur le développement web"}</p>
          <div className="bg-gray-300 w-[500px] h-[300px] flex items-center justify-center">
            Coming soon
          </div>
        </section>
      </main>
    </>
  );
}
