export const ParentComp=()=>{
    return(
        <>
        <h1>hello parent component</h1>
        <ChildComp data="React-Js"/>
        </>
    )
}

const ChildComp=(props)=>{
    return(
        <>
        <h3>Child componment</h3>
        <GrandChildComp data={props.data}/>
        </>
    )

}

const GrandChildComp=(props)=>{
    return(
        <>
        <h2>grand child</h2>
        <GreatGrandChild data={props.data}/>
        
        </>
    )
}

const GreatGrandChild=(props)=>{
    return(
        <>
        <h1>i love {props.data}</h1>

        </>
    )
}

