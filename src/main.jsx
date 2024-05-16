
import { StyleSheet} from "react-native";
import RoutesApp from "./routes/RoutesApp";
import { UserContexProvider } from "./contex/userContex";
import { StatusBar } from "expo-status-bar";



const Main = () => {
    return (
      
      <UserContexProvider>
        <StatusBar style="light" />
          <RoutesApp />
      </UserContexProvider>

      

      
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Main;