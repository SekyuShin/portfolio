import React, { useState } from 'react';
import Axios from 'axios';

function AxiosApi() {
    // photos, setPhotos 비구조화 할당
    const [test,setTest] = useState('');

    // 통신 메서드
    // function searchApi() {
    //     const promise = new Promise((resolve, reject) => {
    //         const url = 'http://127.0.0.1:3030/projects/main/1'//'http://192.168.1.43:3030/projects/main/1';
    //         console.log("searchApi");
    //         Axios.get(url)
    //         .then(function(response) {
    //             console.log(response);
    //             resolve(setTest(response.data.id + ", " +response.data.name));
    //         })
    //         .catch(function(error) {
    //             console.log("error"+error);
    //             reject(setTest('test error'+error));
    //         })
    //     });
    //     return promise;
    // }
    //searchApi();

    function searchApi() {
        const url = 'http://127.0.0.1:3030/projects/main/all'//'http://192.168.1.43:3030/projects/main/1';
        console.log("searchApi");
        Axios.get(url)
        .then(function(response) {
            console.log(response);
            setTest(response.data[0].name);
        })
        .catch(function(error) {
            console.log("error"+error);
            setTest('test error'+error);
        })
        
    }
 // 조회 데이터 존재할 경우
 if(test.length > 0) {
    return (
                <div>
                    {test};
                </div>
    );
} else { // 조회 데이터 존재하지 않을 경우
    return (
        <div>
            <button onClick={searchApi}> 불러오기 </button>
        </div>
    )
}
    
}
export default AxiosApi;