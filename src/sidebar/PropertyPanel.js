﻿import ObjectPanel from './ObjectPanel';
import GeometryPanel from './geometry/GeometryPanel';
import MaterialPanel from './MaterialPanel';
import UI from '../ui/UI';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function PropertyPanel(app) {
    this.app = app;
    var editor = this.app.editor;

    var container = new UI.Span();

    var objectTab = new UI.Text('物体').onClick(onClick);
    var geometryTab = new UI.Text('几何').onClick(onClick);
    var materialTab = new UI.Text('材质').onClick(onClick);

    var tabs = new UI.Div();
    tabs.setId('tabs');
    tabs.add(objectTab, geometryTab, materialTab);
    container.add(tabs);

    function onClick(event) {

        select(event.target.textContent);

    }

    //

    var object = new UI.Span().add(
        new ObjectPanel(this.app)
    );
    container.add(object);

    var geometry = new UI.Span().add(
        new GeometryPanel(editor)
    );
    container.add(geometry);

    var material = new UI.Span();

    var materialPanel = new MaterialPanel(this.app);

    material.dom.appendChild(materialPanel.dom);

    container.add(material);

    //

    function select(section) {

        objectTab.setClass('');
        geometryTab.setClass('');
        materialTab.setClass('');

        object.setDisplay('none');
        geometry.setDisplay('none');
        material.setDisplay('none');

        switch (section) {
            case '物体':
                objectTab.setClass('selected');
                object.setDisplay('');
                break;
            case '几何':
                geometryTab.setClass('selected');
                geometry.setDisplay('');
                break;
            case '材质':
                materialTab.setClass('selected');
                material.setDisplay('');
                break;
        }

    }

    select('物体');

    return container;

};

export default PropertyPanel;