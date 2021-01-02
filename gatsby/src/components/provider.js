import React, { useState } from 'react'

export const OpenContext = React.createContext()

 function Provider({children}){
    const [open, setOpen] = useState(Boolean)
    return(
<OpenContext.Provider value={[open, setOpen]}>
    {children}
</OpenContext.Provider>
    )
}
export default Provider