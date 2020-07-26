sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/List",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, History, List, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("ovly.fiori_24.cadastro_de_alunos.controller.Lista", {
		onInit: function () {

		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
				//sap.m.MessageToast.show("Navegouuuu");
			} else {
				this.getOwnerComponent().getRouter().navTo("listagem");
			}
		},
		onAdd: function () {
			sap.m.MessageToast.show("Deveria adicionar...kkk");
		},

		onItemPress: function (oEvent) {
			var oItem = oEvent.getParameters().listItem;
			var oContext = oItem.getBindingContext();
			var oAluno = oContext.getObject();
			var sId = oAluno.Id;
			// sap.m.MessageToast.show();
			this.getOwnerComponent().getRouter().navTo("exibir", {
				codigo: sId
			});
		},

		onSearch: function (oControlEvent) {
			// var oSearchField = oControlEvent.getSource();
			// var sValue = oSearchField.getValue();
			// sap.m.MessageToast.show(sValue);
			// console.log(sValue);

			// var sQuery = oControlEvent.getParameter('query'),
			// 	oList = this.getView().byId("itemList"),
			// 	oBinding = oList.getBinding("items");
			// if (sQuery) {
			// 	var aFilter = [],
			// 		fnTestPubl = function (bPublic) {
			// 			// use formatPublicFlag to reproduce
			// 			// formated value, then check if it contains 'sQuery'
			// 			// compare uppercase strings since filter be case insensitive
			// 			return this.formatPublicFlag(bPublic).toUpperCase().indexOf(sQuery.toUpperCase()) >= 0;
			// 		}.bind(this); // make sure 'this' inside the function refers to the
			// 	// controller
			// 	aFilter.push(new Filter("FirstName", FilterOperator.Contains, sQuery));
			// 	aFilter.push(new Filter("LastName", fnTestPubl, FilterOperator.Contains, sQuery));
			// 	// Create a filter which contains our name and 'publ' filter
			// 	// an concatenates them with 'or'
			// 	oBinding.filter(new Filter({
			// 		filters: aFilter,
			// 		and: false
			// 	}));
			// } else {
			// 	// Use empty filter to show all list items
			// 	// oBinding.filter(new Filter([])); does not work
			// 	oBinding.filter([]);
			// }

			var aFilter = [];
			var sQuery = oControlEvent.getParameter("query");
			if (sQuery) {
				//aFilter.push(new Filter("FirstName", FilterOperator.Contains, sQuery));
				aFilter.push(new Filter("FirstName", FilterOperator.Contains, sQuery));
				//aFilter.push(new Filter("LastName", FilterOperator.Contains, sQuery));
			}
			// filter binding
			var oList = this.getView().byId("listItem");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);

			// var aFilters = [];
			// var sQuery = oControlEvent.getSource().getValue();
			// if (sQuery && sQuery.length > 0) {
			// 	var filter = new Filter("FirstName", FilterOperator.Contains, sQuery);
			// 	aFilters.push(filter);
			// }

			// // update list binding
			// var oList = this.byId("itemList");
			// var oBinding = oList.getBinding("items");
			// oBinding.filter(aFilters);

		}
	});
});