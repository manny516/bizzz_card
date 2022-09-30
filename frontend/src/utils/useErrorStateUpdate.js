const useErrorStateUpdate = ({
    stateUpdate,
    errorState,
    errorMessage
}) =>{
   return (
        stateUpdate( stateItems =>{
            return {
            ...stateItems,
            [errorState] : errorMessage
            }

        })
   )
}


export default useErrorStateUpdate;