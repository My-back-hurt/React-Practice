import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-bold">User Detail</h2>
      <p>User ID: {id}</p>
    </div>
  );
}
