import ProductTab from './ProductTab';
import './App.css';
import UserActivity from './UserActivity';

export default function App() {
  const users = ["Aniket", "Rohit", "Aman"];
  const textColor = ["Orange", "White", "Green"];

  return (
    <>
      {users.map((user, idx) => (
        <UserActivity key={idx} user={user} textColor={textColor[idx]} idx={idx} />
      ))}
      <ProductTab />
    </>
  );
}

