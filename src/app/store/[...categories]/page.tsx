interface CategoriesProps{
    params:{
        categories:string[];
    }
    searchParams: {
        social?: string;
    }
}
export default function Category(props: CategoriesProps){
    const {categories} = props.params
    console.log(props)
    return(
        <h1>Categoria dinamica: {categories}</h1>
    )
}