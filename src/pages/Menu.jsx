import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  { id: 1, name: "Gourmet Sandwich Platter", description: "Assorted premium sandwiches", price: 89.99, image: "/placeholder.svg" },
  { id: 2, name: "Fresh Fruit Tray", description: "Seasonal fruits beautifully arranged", price: 49.99, image: "/placeholder.svg" },
  { id: 3, name: "Vegetarian Wrap Selection", description: "Variety of vegetarian wraps", price: 69.99, image: "/placeholder.svg" },
  // Add more menu items as needed
];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Menu</h1>
      <Input
        type="search"
        placeholder="Search menu items..."
        className="mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <p>{item.description}</p>
              <p className="font-bold mt-2">${item.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button>Add to Order</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Menu;