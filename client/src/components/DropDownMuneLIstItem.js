import React from "react"
import {Dropdown, DropdownButton} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

class ArrayList extends React.Component
{
    Name = "Nikiat"
    LastNAme="komarov"
    MenuList={
        List:[this.Name, this.LastNAme]
    }



    render()
    {
        return(
            <div>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                {this.MenuList.List.map(data=>{
                        <Dropdown.Item title={data}>{data}</Dropdown.Item>
                    })}
                </DropdownButton>
            </div>
        )
    }
}

export default ArrayList