import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
const data = [
  {
    name: "FREE",
    price: "$0",
    features: [
      {
        name: "Single User",
        valid: "true",
      },
      {
        name: "5GB Storage",
        valid: "true",
      },
      {
        name: "Unlimited Public Projects",
        valid: "true",
      },
      {
        name: "Community Access",
        valid: "true",
      },
      {
        name: "Unlimited Private Projects",
        valid: "false",
      },
      {
        name: "Dedicated Phone Support",
        valid: "false",
      },
      {
        name: "Free Subdomain",
        valid: "false",
      },
      {
        name: "Monthly Status Reports",
        valid: "false",
      },
    ],
  },
  {
    name: "PLUS",
    price: "$9",
    features: [
      {
        name: "5 Users",
        valid: "true",
      },
      {
        name: "50GB Storage",
        valid: "true",
      },
      {
        name: "Unlimited Public Projects",
        valid: "true",
      },
      {
        name: "Community Access",
        valid: "true",
      },
      {
        name: "Unlimited Private Projects",
        valid: "true",
      },
      {
        name: "Dedicated Phone Support",
        valid: "true",
      },
      {
        name: "Free Subdomain",
        valid: "true",
      },
      {
        name: "Monthly Status Reports",
        valid: "false",
      },
    ],
  },
  {
    name: "Pro",
    price: "$49",
    features: [
      {
        name: "unlimited User",
        valid: "true",
      },
      {
        name: "150GB Storage",
        valid: "true",
      },
      {
        name: "Unlimited Public Projects",
        valid: "true",
      },
      {
        name: "Community Access",
        valid: "true",
      },
      {
        name: "Unlimited Private Projects",
        valid: "true",
      },
      {
        name: "Dedicated Phone Support",
        valid: "true",
      },
      {
        name: " unlimited Free Subdomain",
        valid: "true",
      },
      {
        name: "Monthly Status Reports",
        valid: "true",
      },
    ],
  },
];
function App() {
  return (
    <div className="top py-5">
      <div className=" container">
        <div className="row justify-content-center">
          { data.map( ele => <Card key= {ele.name} data={ele}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;