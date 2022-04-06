import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";

export default function Error() {
    const router = useRouter();
  return (
    <Layout>
      <main>
        <figure className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <i className="bi bi-exclamation-triangle-fill is-size-2 has-text-warning"/>
          <h1 className="title is-size-5 has-text-white">Ha ocurrido un error</h1>
          <button onClick={()=>router.push("/")} className="button is-info">Regresar al inicio</button>
        </figure>
      </main>
    </Layout>
  );
}
