import  { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReview] = useState([]);
    useEffect(()=>{
        // const url=('https://jsonplaceholder.typicode.com/users');
        fetch('reviewdata.json')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return [reviews, setReview];
};

export default useReview;