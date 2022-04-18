import JewelryForm from "../../../components/forms/JewelryForm";
import Layout from "../../../components/layout/Layout";
import { nanoid } from "nanoid";

const jewelryPurchaseTest = {
  jewelry: [
    {
      id: nanoid(),
      cells: [
        {
          cellName: "Material",
          inputType: "text",
          inputValue: "12k",
          inputName: "material",
        },
        {
          cellName: "Gramos",
          inputType: "text",
          inputValue: "8gr",
          inputName: "weight",
        },
        {
          cellName: "Precio",
          inputType: "text",
          inputValue: "50$",
          inputName: "price",
        },
        {
          cellName: "Pagado",
          inputType: "checkbox",
          inputValue: false,
          inputName: "paid",
        },

        {
          cellName: "Acciones",
          inputType: "button",
          inputName: "deleteBtn",
        },
      ],
    },

    {
      id: nanoid(),
      cells: [
        {
          cellName: "Material",
          inputType: "text",
          inputValue: "18k",
          inputName: "material",
        },
        {
          cellName: "Gramos",
          inputType: "text",
          inputValue: "8gr",
          inputName: "weight",
        },
        {
          cellName: "Precio",
          inputType: "text",
          inputValue: "50$",
          inputName: "price",
        },
        {
          cellName: "Pagado",
          inputType: "checkbox",
          inputValue: false,
          inputName: "paid",
        },

        {
          cellName: "Acciones",
          inputType: "button",
          inputName: "deleteBtn",
        },
      ],
    },
  ],
};

export default function editJewelrySection({ jewelryPurchase }) {
  console.log(jewelryPurchase)
  return (
    <Layout>
      <JewelryForm jewelryPurchase={jewelryPurchase} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/jewelry");
  const jewelryPurchases = await res.json();

  const paths = jewelryPurchases.map((jewelryPurchase) => ({
    params: { id: jewelryPurchase._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/jewelry/${params.id}`);

  const jewelryPurchase = await res.json();

  return { props: { jewelryPurchase } };
}
