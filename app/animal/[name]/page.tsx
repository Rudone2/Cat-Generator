interface Params{
params:{name: string};
};

export default function YourAnimal ({params}:Params){
    return <>
    <h1>Welcome {params.name} </h1>

    </>
    };