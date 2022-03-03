import React from 'react'
export default function Layout(props: any) {
    console.log('props', props.details, props.details.flatMap((x:any) => x).length) 
    let count = 0   
    props.details.map((row: any, rowIndex: number) => {        
        row.map((col: any, colIndex: number) => console.log('row', row, 'col', col, 'index', rowIndex, colIndex, count+1))
    })
    return (<div>
                {/* {props.children} */}
                {/* TEST: {props.children.length} */}
                {
                    // React.Children.map(props.children, (child, index) =>
                    props.details.flat().map((elem:number, elemIndex: number) =>
                        // console.log('child', props.children[col])
                        React.cloneElement(props.children[elem], {
                            className: `md-${elem} img-special-class`,
                            key:elemIndex
                        })
                    )
                }        
            </div>)
}