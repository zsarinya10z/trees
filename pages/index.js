import SetHead from "../components/head/index";
import Footer from "../components/footer/index";
import Product from "../components/Product/index";

const DUMMY_MEETUPS = [
  {
    product_id: "1",
    product_name: " Zamioculcas zamifolia",
    image_path:
      "https://i.pinimg.com/564x/35/19/b5/3519b5256ecea5ff7091fd0e860deb27.jpg",
    price: "399$",
  },
  {
    product_id: "2",
    product_name: "Monstera Philidendron ",
    image_path:
      "https://i.pinimg.com/564x/e1/55/ba/e155ba15bf3bb18a644abbf4d555545f.jpg",
    price: "359$",
  },
  {
    product_id: "3",
    product_name: "Fiddle Leaf Fig ",
    image_path:
      "https://i.pinimg.com/474x/87/01/63/870163b5211309f4599bc873288effac.jpg",
    price: "160$",
  },
  {
    product_id: "4",
    product_name: "Monstera deliciosa ",
    image_path:
      "https://i.pinimg.com/564x/13/44/c7/1344c7e9bb5c927b1d72d4b0b4fccff5.jpg",
    price: "129$",
  },
  {
    product_id: "5",
    product_name: "Calathea Medallion",
    image_path:
      "https://i.pinimg.com/564x/66/3e/a9/663ea9d38e2ec48a35471e96c266834b.jpg",
    price: "225$",
  },
  {
    product_id: "6",
    product_name: "Calathea Dottie ",
    image_path:
      "https://i.pinimg.com/564x/e2/08/93/e2089383ed91bce61c055af0e9e0eb82.jpg",
    price: "99$",
  },
  {
    product_id: "7",
    product_name: "Sansevieria trifasciata",
    image_path:
      "https://i.pinimg.com/564x/6a/0d/2e/6a0d2e53b52485e419d8f8aecf9e1f75.jpg",
    price: "500$",
  },
  {
    product_id: "8",
    product_name: "Laurentii ",
    image_path:
      "https://i.pinimg.com/564x/ac/c1/3e/acc13e04e23d355b927851b65f1b3ca8.jpg",
    price: "199$",
  },
  {
    product_id: "9",
    product_name: "Asplenium nidus",
    image_path:
      "https://i.pinimg.com/564x/df/95/22/df9522b1b012e9a9e5226bcceeff4a90.jpg",
    price: "179$",
  },
  {
    product_id: "10",
    product_name: "Alocasia polly",
    image_path:
      "https://i.pinimg.com/564x/b8/c7/f4/b8c7f43916e8c191da22eb0edbd799a9.jpg",
    price: "99$",
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Product data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      data: DUMMY_MEETUPS,
    },
  };
}
