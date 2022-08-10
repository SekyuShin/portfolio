import React, { useState } from 'react';
import Axios from 'axios';

function AxiosApi() {
    // photos, setPhotos 비구조화 할당
    const [test,setTest] = useState('');

    // 통신 메서드
    function searchApi() {
        const url = 'http://192.168.1.43:3030/projects/main/1';
        console.log("searchApi");
        Axios.get(url)
        .then(function(response) {
            console.log("response" + response.data);
            setTest(response.data.id + ", " +response.data.name);
        })
        .catch(function(error) {
            console.log("error"+error);
            setTest('test error'+error);
        })
        
    }
    searchApi();
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