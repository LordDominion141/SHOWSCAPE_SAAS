// 3. WRITE WHAT IT SHOULD LOOK LIKE

export function Badge({text, type}) {
    
    return (
        <>
        <style>{`
        .badge {
        width: 200px;
        height: 200px;
        padding: 5px 7px;
        border-radius: 5px;
        color: white;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        }

        .badge-success {
        background-color: green;
        }

        .badge-fail {
        background-color: red;
        }
        `}</style>


            <div className={`badge badge-${type}`}>
                {text}
            </div>
        </>
    )
}