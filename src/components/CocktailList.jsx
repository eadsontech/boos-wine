import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({drinks}) => {
    if(!drinks) {
        return <h4 style={{textAlign: 'center'}}>No matching cocktail found</h4>
    }

    const formattedDrinks = drinks.map((item) => {
        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions} = item;
        return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass, desc: strInstructions}
    })
  return (
    <Wrapper>
        {formattedDrinks.map((item) => {
            return <CocktailCard key={item.id} {...item} />
        })}
    </Wrapper>
  )
}
export default CocktailList