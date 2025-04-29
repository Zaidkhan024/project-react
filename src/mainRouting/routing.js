
import { createBrowserRouter } from "react-router-dom";
import MyCarousalComp from '../components/MyCrousalComp'
import ParentComp from '../components/ParentComp';
import CounterComp from '../components/CounterComp';
import CssComp from '../components/CssComp';
import MultimediaComp from '../components/MultimediaComp';
import ConditionRenComp from '../components/ConditionRenComp';
import FormvalComp from '../components/FormvalComp';
import PageNotFoundComp from '../layout/PageNotFoundComp';
import ReactHooksComp from '../hooks/ReactHooksComp';
import UseStateHook from "../hooks/UseStateHook";
import UseEffectHook from "../hooks/UseEffectHook";
import MainDashboardComp from "../layout/MainDashboardComp";
import ProductDashComp from "../crud/ProductDashComp";
import AddProductComp from "../crud/AddProductComp";
import EditProductComp from "../crud/EditProductComp";
import LoginComp from "../layout/LoginComp";
import ProtectedRoutComp from "./ProtectedRoutComp";

const router = createBrowserRouter([

    {path:"/",element:<LoginComp/>},
    {path:"/login",element:<LoginComp/>},

    {path:"/maindashboard",element:<ProtectedRoutComp Component={MainDashboardComp}/>,children:[
        
        {path:"",element:<MyCarousalComp/>}, //DEFAULT ROUTING
        {path:"formval",element:<FormvalComp/>}, //DEFAULT ROUTING
    
        {path:"parent",element:<ParentComp/>}, //NAMING ROUTING
    
        {path:"reacthooks",element:<ReactHooksComp/>,children:[
            {path:"usestatehook",element:<UseStateHook/>},
            {path:"useeffecthook",element:<UseEffectHook/>} //USING DEFAULT ROUTING INSIDE CHILD ROUTING
        ]}, //CHILD ROUTING
    
        // {path:"mutlimedia/:id",element:<MultimediaComp/>}, //PARAMETERIZED ROUTING
        
        {path:"multimedia",element:<MultimediaComp/>}, 

        {path:"counter",element:<CounterComp/>},
    
        {path:"css",element:<CssComp/>},
    
        {path:"conditional",element:<ConditionRenComp/>},

        {path:"crud",element:<ProductDashComp/>},

        {path:"addd",element:<AddProductComp/>},

        {path:"editproduct/:id",element:<EditProductComp/>},
           
        ]},
        
        {path:"/*",element:<PageNotFoundComp/>} //WILD-CARD ROUTING
        //NOTE - THERE WILL BE NO ROUTER AFTER WILD CARD ROUTING IT ALWAYS SHOULD BE LAST 

]);

export default router
