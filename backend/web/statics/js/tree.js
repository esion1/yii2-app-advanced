var TreeView = function () {

    return {
        //main function to initiate the module
        init: function () {

            var DataSourceTree = function (options) {
                this._data  = options.data;
                this._delay = options.delay;
                this.url    = options.url;
            };

            // DataSourceTree.prototype = {
            //
            //     data: function (options, callback) {
            //         var self = this;
            //
            //         setTimeout(function () {
            //             var data = $.extend(true, [], self._data);
            //
            //             callback({ data: data });
            //
            //         }, this._delay)
            //     }
            // };

            DataSourceTree.prototype.data = function (options, callback) {

                var param = null

                if (!("name" in options) && !("type" in options)) {
                    param = 0;//load the first level
                }
                else if ("type" in options && options.type == "folder") {
                    if ("additionalParameters" in options && "children" in options.additionalParameters) {
                        param = options.additionalParameters["id"];
                    }
                }

                if (param != null) {
                    $.ajax({
                        url: this.url,
                        data: 'id=' + param,
                        type: 'POST',
                        dataType: 'json',
                        success: function (response) {
                            if (response.status == "OK")
                                callback({ data: response.data })
                        },
                        error: function (response) {
                            // console.log(response);
                        }
                    })
                }
            };

            // INITIALIZING TREE
            var treeDataSource = new DataSourceTree({
                data: [
                    { name: 'Theme', type: 'folder', additionalParameters: { id: 'F1' } },
                    { name: 'Design', type: 'folder', additionalParameters: { id: 'F2' } },
                    { name: 'Development', type: 'item', additionalParameters: { id: 'I1' } },
                    { name: 'Testing', type: 'item', additionalParameters: { id: 'I2' } }
                ],
                delay: 400
            });

            var treeDataSource2 = new DataSourceTree({
                data: [
                    { name: 'Test tree 1 <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Test tree 2 <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-bell-o"></i> Notification', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-bar-chart-o"></i> Assignment', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource3 = new DataSourceTree({
                data: [
                    { name: 'Theme <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Development <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: 'Flat Theme', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: 'Modern Design', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource4 = new DataSourceTree({
                data: [
                    { name: 'Theme<div class="tree-actions"><i class="fa fa-edit"></i></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Development<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-user"></i> User <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div><div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-calendar"></i> Events <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } },
                    { name: '<i class="fa  fa-gear "></i> Works <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource5 = new DataSourceTree({
                data: [
                    { name: 'Theme<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Development<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-user"></i> User <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div><div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-calendar"></i> Events <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } },
                    { name: '<i class="fa  fa-gear "></i> Works <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource6 = new DataSourceTree({
                data: [
                    { name: 'Theme<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Development<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-user"></i> User <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div><div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-calendar"></i> Events <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } },
                    { name: '<i class="fa  fa-gear "></i> Works <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource7 = new DataSourceTree({
                url: window.location.href,
                delay: 400
            });

            $('#FlatTree').tree({
                dataSource: treeDataSource,
                loadingHTML: '<img src="/statics/img/input-spinner.gif"/>',
            });


            $('#FlatTree2').tree({
                dataSource: treeDataSource2,
                loadingHTML: '<img src="/statics/img/input-spinner.gif"/>',
            });

            $('#FlatTree3').tree({
                dataSource: treeDataSource3,
                loadingHTML: '<img src="/statics/img/input-spinner.gif"/>',
            });

            $('#FlatTree4').tree({
                selectable: false,
                multiSelect: true,
                dataSource: treeDataSource7,
                loadingHTML: '<img src="/statics/img/input-spinner.gif"/>',
            });


        }

    };

}();
