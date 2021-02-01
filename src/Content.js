import Title from "./Title";
import Description from "./Description";

const Content = () => {
   return (
      <>
         <div className="App">
            <Title name="Lorem" />
            <Description
               text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                possimus animi ad dolorem provident fuga numquam itaque? Veritatis,
                tenetur eligendi quibusdam sit, velit totam debitis at fugiat
                tempore possimus incidunt."
            />

            <Title name="Ipsum" />
            <Description
               Text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                    possimus animi ad dolorem provident fuga numquam itaque? Veritatis,
                    tenetur eligendi quibusdam sit, velit totam debitis at fugiat
                    tempore possimus incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                    possimus animi ad dolorem provident fuga numquam itaque? Veritatis,
                    tenetur eligendi quibusdam sit, velit totam debitis at fugiat
                    tempore possimus incidunt."
            />
         </div>
      </>
   );
};
export default Content;
