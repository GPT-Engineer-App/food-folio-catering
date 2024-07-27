import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to CaterEase</h1>
      <p className="text-xl mb-8">Simplify your business catering with our easy-to-use platform.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Browse Our Menu</h2>
          <p className="mb-4">Explore our wide range of delicious catering options for your next event.</p>
          <Button asChild>
            <Link to="/menu">View Menu</Link>
          </Button>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
          <p className="mb-4">Check the status of your current orders or place a new one.</p>
          <Button asChild>
            <Link to="/orders">View Orders</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;