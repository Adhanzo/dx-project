import { useNavigate } from "react-router-dom";
import DXlogo2 from "./img/logo/Logo.png";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="px justify-between bg-[#ABC4AA] text-white sm:py-14">
        <div className="hidden xl:flex justify-center">
          <div className="my-9 mr-52">
            <a href="https://difhaels.github.io/determinix " target={"_blank"} rel="noreferrer">
              <img className="hover:origin-[33%_75%]" src={DXlogo2} width="120" alt="dx" />
            </a>
          </div>
          <div className="block mr-40">
            <h1 className="font-bold text-text">TOOLS</h1>
            <a className="block hover:text-text" href="https://id.wikipedia.org/wiki/HTML" target={"_blank"} rel="noreferrer">
              HTML
            </a>
            <a className="block hover:text-text" href="https://en.wikipedia.org/wiki/CSS" target={"_blank"} rel="noreferrer">
              CSS
            </a>
            <a className="block hover:text-text" href="https://www.javascript.com/" target={"_blank"} rel="noreferrer">
              JavaScript
            </a>
            <a className="block hover:text-text" href="https://tailwindcss.com/" target={"_blank"} rel="noreferrer">
              TailwindCSS
            </a>
            <a className="block hover:text-text" href="https://reactjs.org/" target={"_blank"} rel="noreferrer">
              ReactJS
            </a>
          </div>
          <div className="block mr-32">
            <h1 className="font-bold text-text">RELATED</h1>
            <a className="block hover:text-text" href="https://www.unas.ac.id/" target={"_blank"} rel="noreferrer">
              Universitas Nasional
            </a>
            <a className="block hover:text-text" href="https://campus.quipper.com/majors/id-sistem-informasi" target={"_blank"} rel="noreferrer">
              Sistem Informasi
            </a>
            <a className="block hover:text-text" href="https://id.wikipedia.org/wiki/Teknologi_informasi" target={"_blank"} rel="noreferrer">
              Teknologi
            </a>
          </div>
          <div className="block">
            <h1 className="font-bold text-text">PORTFOLIO</h1>
            <a className="block hover:text-text" href="https://difhaels.github.io/" target={"_blank"} rel="noreferrer">
              Agung Saputra
            </a>
            <a className="block hover:text-text" href="https://hy-grou.github.io/" target={"_blank"} rel="noreferrer">
              Aru Chevy
            </a>
            <h1 className="font-bold pt-2 text-text">GITHUB</h1>
            <a className="block hover:text-text" href="https://github.com/difhaels" target={"_blank"} rel="noreferrer">
              Difhaels
            </a>
            <a className="block hover:text-text" href="https://github.com/hy-grou" target={"_blank"} rel="noreferrer">
              hy-grouu
            </a>
            <div className="mt-4">
              <button className="px-4 py-1.5 rounded-lg justify-center bg-text hover:text-bg " onClick={() => navigate("/our-team")}>
                Our Team
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto my-10 w-[90%] h-[0.5px] bg-white hidden xl:flex"></div>

        <div className="flex  justify-center gap-6 py-10 sm:py-0">
          <a href="https://wa.me/" target="_blank" rel="noreferrer">
            <svg role="img" width="40" className="fill-current hover:text-text " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/" className="hover:text-text" target="_blank" rel="noreferrer">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" className="fill-current">
              <title>Instagram</title>
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/1" target="_blank" rel="noreferrer">
            <svg role="img" width="40" className="fill-current hover:text-text" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Facebook</title>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>

        <div className="flex justify-center pt-14">
          <h1>Created by Determinix 2023</h1>
        </div>
      </div>
    </>
  );
}
