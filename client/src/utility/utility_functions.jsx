import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function scrollToTopF() {

    window.scrollTo({top:0, behavior:"smooth"});
}
