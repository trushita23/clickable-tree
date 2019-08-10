module.exports = {
    get: () => {
      return Promise.resolve({
        data: [
            {
                'label': 'India',
                'value' : 'India',
                'children' : [
                    {
                        'label' : 'Maharastra',
                        'value' : 'Maharastra',
                        children : [
                            {
                                label: 'Pune',
                                value: 'Pune'
                            },
                            {
                                label: 'Mumbai',
                                value: 'Mumbai'
                            },
                        ]
                    },
                    {
                        'label' : 'Punjab',
                        'value' : 'Punjab',
                        children : [
                            {
                                label: 'Amritsar',
                                value: 'Amritsar'
                            },
                            {
                                label: 'Bhatinda',
                                value: 'Bhatinda'
                            },
                        ]
                    },
                    {
                        'label' : 'Karnataka',
                        'value' : 'Karnataka',
                        children : [
                            {
                                label: 'Bengaluru',
                                value: 'Bengaluru'
                            },
                            {
                                label: 'Mysuru',
                                value: 'Mysuru'
                            },
                        ]
                    }
                ]
            },
            {
                'label': 'England',
                'value' : 'England',
                'children' : [
                    {
                        'label' : 'Berkshire',
                        'value' : 'Berkshire',
                        children : [
                            {
                                label: 'Reading',
                                value: 'Reading'
                            }
                        ]
                    }
                ]
            },
            {
                'label': 'New Zealand',
                'value' : 'New Zealand',
                'children' : [
                    {
                        'label' : 'Wellington',
                        'value' : 'Wellington',
                    },
                    {
                        'label' : 'Otago',
                        'value' : 'Otago',
                        children : [
                            {
                                label: 'Queenstown',
                                value: 'Queenstown'
                            }
                        ]
                    }
                ]
            },
            {
                'label': 'Australia',
                'value' : 'Australia',
                'children' : [
                    {
                        'label' : 'Victoria',
                        'value' : 'Victoria',
                    }
                ]
            },
            {
                'label': 'West Indies',
                'value' : 'West Indies',
                'children' : [
                    {
                        'label' : 'Barbados',
                        'value' : 'Barbados',
                    },
                    {
                        'label' : 'Trinidad and Tobago',
                        'value' : 'Trinidad and Tobago',
                    }
                ]
            }
        ]
      });
    }
};