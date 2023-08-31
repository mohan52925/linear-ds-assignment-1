
// Write a program to reverse a stack

    let st = [];

    function insert_at_bottom(x)
    {
        if(st.length==0)
            st.push(x);
        else
        {
                let a = st.pop();
                insert_at_bottom(x);
                st.push(a);``
        }
        
        
    }
    function reverse()
    {
        if(st.length > 0)
            {
                let x = st.pop();
                reverse();
                insert_at_bottom(x);
            }
    }
    st.push('1');
    st.push('2');
    st.push('3');
    st.push('4');
    
    console.log("Original Stack");
    
    console.log(st.join(" "));
    reverse();
    
    console.log("Reversed Stack");
    
    console.log(st.join(" "));
    

    