 const useUpdateStateObj = (setuserFields,stateType,dataChange) =>{

    setuserFields( prevState =>{
        return{
            ...prevState,
            [stateType] : dataChange
        }

    } );
}

export default useUpdateStateObj;