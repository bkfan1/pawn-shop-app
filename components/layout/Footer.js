import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const {pathname} = router;
  return ( 
    <footer className={`myFooter is-flex is-flex-direction-column is-align-items-center is-justify-content-center p-3 ${pathname === "/" ? "myFooter__mobileStyles" : ""}`}>
      <p className="has-text-warning">Creado por Jackson Paredes Ferranti</p>
      <ul>
        <li>
          <a className="has-text-warning" href="https://www.github.com/bkfan1">
            <i className="bi bi-github" />
          </a>
          <a
            className="mx-2 has-text-warning"
            href="mailto:jacksonpf177@gmail.com"
          >
            <i className="bi bi-envelope-fill" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
