Game.Stats = (function () {
    let _configMap = {
       chartPointer: "",
       chart: ""
    }

    const _init = function () {
        _configMap.chartPointer = document.getElementById('myChart').getContext('2d')
        
        _configMap.chart = new Chart(_getChartPointer(), {
            type: 'line',
            data: {

            },
            options: {
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
            }
        });
    }

    const _getChartPointer = function() {
        return _configMap.chartPointer
    }

    const _getChart = function() {
        return _configMap.chart
    }

    const _getDatasets = function() {
        let datasets = _getChart().data.datasets
        return datasets
    }

    const _getDatasetIndexByLabel = function(label) {
        let datasets = _getChart().data.datasets
        let index = datasets.findIndex(x => x.label === label)
        return index
    }

    const _getDatasetByLabel = function (label) {
        return _getChart().data.datasets[_getDatasetIndexByLabel(label)]
    }

    const addDataToDataset = function(label, data) {
        let dataset = _getDatasetByLabel(label)
        dataset.data.push(data)
        _getChart().update();
    }
    
    const addDataset = function(dataset) {
        _getChart().data.datasets.push(dataset);
        _getChart().update();
    }

    const removeDataset = function(label) {
        let datasets = _getDatasets()
        let index = _getDatasetIndexByLabel(label)

        datasets.splice(index, 1)
        _getChart().update();
    }

    const setTestData = function() {
        let d1 = {
            label: '1',
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
        }
        addDataset(d1);
        let d2 = {
            label: '2',
            data: [7, 13, 2, 8, 1, 8],
            fill: true,
        }
        addDataset(d2);
    }

    const addTestDataset = function() {
        let data = {
            label: "Added data",
            data: [getRandom(1,15), getRandom(1,15), getRandom(1,15), getRandom(1,15), getRandom(1,15), getRandom(1,15), getRandom(1,15)]
        }
        addDataset(data);
    }

    const getRandom = function(min, max) {
        return Math.random() * (max - min) + min;
    }

    return {
        init: _init,
        addDataset: addDataset,
        removeDataset: removeDataset,
        setTestData: setTestData,
        addTestData: addTestDataset,
        addDataToDataset: addDataToDataset
    }
})()
