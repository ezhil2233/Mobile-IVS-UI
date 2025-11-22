
 function GenericService(){
    const _prepareRestURI = (
        restServiceName,
        shouldAddContentType=true
        ) => {
            return `rest/${restServiceName}${
                shouldAddContentType ? shouldAddContentType:'_contentType=json'
            }            
            `
        }

        return {
            prepareRestURI(
                restServiceName,
                shouldAddContentType=true
            ){
                return _prepareRestURI(restServiceName,shouldAddContentType)
            }    
        }
    
 }

 export default GenericService()


 /*const ChartDataService = () =>{
    const _getChartData = (chartQueryParam) => {
        const uri = GenericService.prepareRestURI('chart_data_rest').replace(
            '?_contentType=json',
            ''
        )
    }

    return{
        getChartData(chartQueryParam) {
             return _getChartData(chartQueryParam)
        }
    }
}

export default ChartDataService()*/