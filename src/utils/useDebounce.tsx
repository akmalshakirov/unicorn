// import { useEffect, useState } from "react";

// const debouncedSearch = (value: string) => {
//     const [search, setSearch] = useState<string>(value);
//     const [debouncedSearch, setDebouncedSearch] = useState(search);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setDebouncedSearch(search);
//         }, 400);

//         return () => clearTimeout(timer);
//     }, [search]);
// };

// export default debouncedSearch;
