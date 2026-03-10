"use client";

import FlowerRow from "./FlowerRow";

const FlowerBackground = () => {
  // Different flower images from Unsplash - verified working URLs
  const flowerSets = [
    // Row 1 - Pink and Purple flowers
    [
      "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=400&q=80",
      "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?w=400&q=80",
      "https://images.unsplash.com/photo-1567556999003-bed838f1a57a?w=400&q=80",
      "https://images.unsplash.com/photo-1597848212624-e153d58f9a8e?w=400&q=80",
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&q=80",
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&q=80",
      "https://images.unsplash.com/photo-1583624388973-29734c3a3ef8?w=400&q=80",
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&q=80",
    ],
    // Row 2 - Red and Orange flowers
    [
      "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400&q=80",
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400&q=80",
      "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
      "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?w=400&q=80",
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&q=80",
      "https://images.unsplash.com/photo-1469259943454-aa100abba749?w=400&q=80",
      "https://images.unsplash.com/photo-1558818498-28c1e002b655?w=400&q=80",
    ],
    // Row 3 - Yellow and White flowers
    [
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400&q=80",
      "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?w=400&q=80",
      "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=400&q=80",
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80",
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80",
      "https://images.unsplash.com/photo-1477554193778-9562c28588c0?w=400&q=80",
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
    ],
    // Row 4 - Mixed colorful flowers
    [
      "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=400&q=80",
      "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=400&q=80",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&q=80",
      "https://images.unsplash.com/photo-1517518229808-0430e5eb4d56?w=400&q=80",
      "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=400&q=80",
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&q=80",
      "https://images.unsplash.com/photo-1464550838636-1a3496df938b?w=400&q=80",
      "https://images.unsplash.com/photo-1431263154979-0982327fccbb?w=400&q=80",
    ],
    // Row 5 - Roses and elegant flowers
    [
      "https://images.unsplash.com/photo-1491466424936-e304919aada7?w=400&q=80",
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80",
      "https://images.unsplash.com/photo-1460411794035-42aac080490a?w=400&q=80",
      "https://images.unsplash.com/photo-1494336934254-e6311d0e0766?w=400&q=80",
      "https://images.unsplash.com/photo-1522512115668-c09775d6f424?w=400&q=80",
      "https://images.unsplash.com/photo-1481886756534-97af88ccb438?w=400&q=80",
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&q=80",
    ],
    // Row 6 - Additional variety
    [
      "https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?w=400&q=80",
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&q=80",
      "https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=400&q=80",
      "https://images.unsplash.com/photo-1492662170404-87b90e5ddaae?w=400&q=80",
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400&q=80",
      "https://images.unsplash.com/photo-1471116513327-5d0c3c255736?w=400&q=80",
      "https://images.unsplash.com/photo-1457449205106-d0aad138e99b?w=400&q=80",
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=400&q=80",
    ],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Rotated and scaled container - Netflix style */}
      <div
        className="absolute inset-0 scale-150"
        style={{
          transform: "rotate(12deg) scale(1.5)",
          transformOrigin: "center center",
        }}
      >
        {flowerSets.map((images, index) => (
          <FlowerRow
            key={index}
            images={images}
            direction={index % 2 === 0 ? "left" : "right"}
            duration={40 + index * 5} // Varying speeds for dynamic effect
          />
        ))}
      </div>
    </div>
  );
};

export default FlowerBackground;
