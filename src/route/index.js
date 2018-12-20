const   routers =  [
    {
        path:'/',
        exact:true,
        //component:App
        render:(props)=><App {...props}/> 
    },
    {
        path:'/ques/:id',
        exact:true,
        //component:App
        render:(props)=><Ques {...props}/> 
    },
    //
    {
        path:'/text',
        exact:true,
        render:(props)=><Text {...props}/> 
    },
    {
        component:NoMatch
    }

]
const NoMatch =()=>(
    <div>
        no match!
    </div>
)

export default routers