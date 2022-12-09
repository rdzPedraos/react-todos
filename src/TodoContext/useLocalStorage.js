import React from "react";

//Custom hook, here is logic for get and set data in localStorage.
function useLocalStorage(itemName, initialValue = []) {
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
			try{
				//Get content from local storage:
				const localStorageItem = localStorage.getItem(itemName);
	
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
				} else {
					setItem(JSON.parse(localStorageItem));
				}
				setLoading(false);
			} catch(e) {
				setError(e);
			}
        }, 1000);
    }, []);

    const saveItem = newItem => {
		try{
			localStorage.setItem(itemName, JSON.stringify(newItem));
			setItem(newItem);
		}
		catch(e){ setError(e); }
    };

    return {item, saveItem, loading, error};
}

export { useLocalStorage };