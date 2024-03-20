# React + Vite Project 
## Clone this repo  and run the following commands in your terminal:
1. `cd Frontend` -> To reach into the destination folder where our frontend code is.
2. `npm install` -> This will install all the necessary  dependencies for running a react project using npm  (Node Package Manager).
3. `npm run dev` -> To run the project you can use this. 

There are several things that are in this repo (for educational purpose only) :
1. Components: We can call these components in any page where we want to apply that particular element. There are several components in this project. 
                navbar.jsx  // Navigation Bar
                footer.jsx  // Footer 
                button.jsx // Button 

2. Hooks: 

a) UseState -> to store data from our webpage, which returns array , one saves the data and other one is used to display data
      
 ``` js 
           const [data, setData] = usestate({
            name: "",
            email: "",
           });
             Here setdata will set the data into the state and data will return the data that is stored into that objects.

```

b) UseEffect -> action which connects the component to the outside world. Mostly used to fetch data when the page is loading.
 
  ``` js 
       useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  ```