import SplitScreen from "../../components/ui/SplitScreen";
const Users = () =>{

    return(
        <SplitScreen>
            <div>
                <h1> left Side </h1>
            </div>

            <div>
              <h2 className="bg-gray-700 text-white text-center"> Right side pane </h2>
            </div>

        </SplitScreen>
    )
}

export default Users;