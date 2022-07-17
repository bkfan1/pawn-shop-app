import Layout from "../components/layout/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <figure className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <i className="bi bi-exclamation-triangle-fill has-text-white is-size-3" />
        <h1 className="has-text-white is-size-4">El recurso no existe o no ha sido encontrado.</h1>
      </figure>
    </Layout>
  );
}
