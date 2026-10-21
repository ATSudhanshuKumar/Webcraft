import styles from "./page.module.css";

const Dashboard = () => {

  const [data, setData] = useState([]);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Your projects, messages and account settings will live here. Account features are coming soon.</p>
    </div>
  );
};

export default Dashboard;
