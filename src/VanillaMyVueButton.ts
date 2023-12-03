import { createApp } from "vue";
import MyVueButton from "./MyVueButton.vue";
function VanillaMyVueButton(selector:Element){
   createApp(MyVueButton).mount(selector);
}
export default VanillaMyVueButton;
