// import React, { useEffect, useState } from 'react';

// interface GardenItem {
//   cntntsNo: string;
//   cntntsSj: string;
//   rnum: number;
// }

// const GardenList: React.FC = () => {
//   const [gardenList, setGardenList] = useState<GardenItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchGardenList = async () => {
//       try {
//         const response = await fetch('http://api.nongsaro.go.kr/service/garden/gardenList?apiKey=20241018GTR6U5N7EKKELLFUWGZGOG');
//         if (!response.ok) {
//           throw new Error('Failed to fetch garden data');
//         }
//         const data = await response.json();
//         setGardenList(data.body?.items || []);
//       } catch (error) {
//         if (error instanceof Error) {
//           setError(error.message);
//         } else {
//           setError('An unknown error occurred');
//           console.log(error)
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchGardenList();
//   }, []);
  

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Garden List</h1>
//       <ul>
//         {gardenList.map((garden) => (
//           <li key={garden.cntntsNo}>{garden.cntntsSj}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GardenList;
import React from 'react'

export default function GardenList() {
  return (
    <div>
      
    </div>
  )
}

