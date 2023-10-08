(self.webpackChunklite = self.webpackChunklite || []).push([[5203], {
    65368: (e,n,i)=>{
        "use strict";
        i.d(n, {
            D: ()=>c
        });
        var a = i(319)
          , t = i.n(a)
          , d = i(88398)
          , l = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "CatalogAddToListItem_catalog"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Catalog"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "name"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "visibility"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "predefined"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "version"
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "WithToggleInsideCatalog_catalog"
                        }
                    }]
                }
            }].concat(t()(d.s.definitions))
        }
          , o = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "CatalogAddToList_catalog"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Catalog"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "CatalogAddToListItem_catalog"
                        }
                    }]
                }
            }].concat(t()(l.definitions))
        }
          , m = i(97147)
          , r = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "YourCatalogs_catalog"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Catalog"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "CatalogsListItem_catalog"
                        }
                    }]
                }
            }].concat(t()(m.c.definitions))
        }
          , s = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "GetCatalogsByUserReadingList_catalog"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Catalog"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "CatalogAddToList_catalog"
                        },
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "withCatalogDetails"
                                    }
                                }
                            }]
                        }]
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "YourCatalogs_catalog"
                        },
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "withCatalogDetails"
                                    }
                                }
                            }]
                        }]
                    }]
                }
            }].concat(t()(o.definitions), t()(r.definitions))
        }
          , u = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "GetCatalogsByUserCatalogs_catalog"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Catalog"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "CatalogAddToList_catalog"
                        },
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "withCatalogDetails"
                                    }
                                }
                            }]
                        }]
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "YourCatalogs_catalog"
                        },
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "withCatalogDetails"
                                    }
                                }
                            }]
                        }]
                    }]
                }
            }].concat(t()(o.definitions), t()(r.definitions))
        }
          , c = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GetCatalogsByUserQuery"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "pagingOptions"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CatalogPagingOptionsInput"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CatalogType"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withCatalogDetails"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "readingList"
                        },
                        name: {
                            kind: "Name",
                            value: "getPredefinedCatalog"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "userId"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "READING_LIST"
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "__typename"
                                }
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "GetCatalogsByUserReadingList_catalog"
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "catalogsByUser"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "userId"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "pagingOptions"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "pagingOptions"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "__typename"
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "catalogs"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "GetCatalogsByUserCatalogs_catalog"
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "paging"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "nextPageCursor"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }].concat(t()(s.definitions), t()(u.definitions))
        }
    }
    ,
    88398: (e,n,i)=>{
        "use strict";
        i.d(n, {
            s: ()=>a,
            m: ()=>t
        });
        var a = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "WithToggleInsideCatalog_catalog"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Catalog"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "version"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "predefined"
                        }
                    }]
                }
            }]
        }
          , t = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "WithToggleInsideCatalog_post"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Post"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewerEdge"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "catalogsConnection"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "catalogsContainingThis"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            },
                                            value: {
                                                kind: "EnumValue",
                                                value: "LISTS"
                                            }
                                        }],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "catalogId"
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "predefinedContainingThis"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "predefined"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }
    ,
    63508: (e,n,i)=>{
        "use strict";
        i.d(n, {
            a: ()=>C
        });
        var a = i(63038)
          , t = i.n(a)
          , d = i(67294)
          , l = i(19416)
          , o = i(1109)
          , m = i(85208)
          , r = i(54758)
          , s = i(13791)
          , u = i(77355)
          , c = i(40201)
          , k = i(93310)
          , v = i(31379)
          , g = i(52069)
          , p = i(87691)
          , N = i(75221)
          , I = i(78285)
          , f = i(43487)
          , S = i(50458);
        function C(e) {
            var n = e.isVisible
              , i = e.hide
              , a = e.target
              , C = e.kind
              , y = e.viewer
              , F = d.useState("")
              , b = t()(F, 2)
              , T = b[0]
              , D = b[1]
              , _ = d.useState(!1)
              , h = t()(_, 2)
              , E = h[0]
              , V = h[1]
              , O = d.useState("")
              , w = t()(O, 2)
              , A = w[0]
              , L = w[1]
              , x = d.useState(!1)
              , P = t()(x, 2)
              , j = P[0]
              , R = P[1]
              , B = (0,
            f.v9)((function(e) {
                return e.config.authDomain
            }
            ))
              , G = (0,
            m.Ax)(y.id)
              , U = G.createCatalog
              , Q = G.loading
              , H = G.data
              , M = G.error
              , Y = (0,
            r.T2)()
              , W = (0,
            I.w)();
            d.useEffect((function() {
                if ("Catalog" === (null == H ? void 0 : H.createCatalog.__typename))
                    if (C && a) {
                        var e = H.createCatalog
                          , n = e.id
                          , i = e.version;
                        Y({
                            userId: y.id,
                            catalogId: n,
                            version: i,
                            kind: C,
                            itemId: a.id
                        }),
                        X()
                    } else
                        window.location.assign((0,
                        S.yk)(H.createCatalog, B))
            }
            ), [null == H ? void 0 : H.createCatalog, C, null == a ? void 0 : a.id, Y, y.id]),
            d.useEffect((function() {
                M && W({
                    toastStyle: "RETRYABLE_ERROR",
                    duration: 4e3
                })
            }
            ), [M, W]);
            var q = d.useCallback((function(e) {
                D(e.target.value)
            }
            ), [D])
              , z = d.useCallback((function(e) {
                L(e.target.value)
            }
            ), [L])
              , X = d.useCallback((function() {
                D(""),
                L(""),
                V(!1),
                R(!1),
                i()
            }
            ), [i])
              , J = d.useCallback((function() {
                var e = T.trim();
                e.length > 0 && U({
                    attributes: {
                        title: e,
                        description: A.trim(),
                        type: N.HQ.LISTS,
                        visibility: j ? N.n2.PRIVATE : N.n2.PUBLIC
                    }
                })
            }
            ), [T, A, j, U]);
            return d.createElement(s.v, {
                isVisible: n,
                hide: X,
                confirmText: d.createElement(l.I, {
                    loading: Q,
                    text: "Create"
                }),
                isDestructiveAction: !1,
                onConfirm: J,
                disableConfirm: !T.trim() || Q || (0,
                o.G6)(T) || (0,
                o.z6)(A),
                hideOnConfirm: !1
            }, d.createElement(u.x, {
                height: "400px"
            }, d.createElement(u.x, {
                paddingBottom: "60px"
            }, d.createElement(g.Dx, {
                scale: "L"
            }, "Create new list")), d.createElement(u.x, {
                textAlign: "left",
                width: "400px",
                sm: {
                    width: "100%"
                }
            }, d.createElement(u.x, {
                paddingBottom: "20px"
            }, d.createElement(c.n, {
                value: T,
                onChange: q,
                placeholder: "Give it a name",
                characterCountLimit: o.lp
            })), d.createElement(u.x, {
                paddingBottom: "20px"
            }, E ? d.createElement(u.x, {
                maxHeight: "170px",
                overflow: "auto"
            }, d.createElement(c.n, {
                value: A,
                onChange: z,
                placeholder: "Description",
                isMultiline: !0,
                autoFocus: !0,
                characterCountLimit: o.B0
            })) : d.createElement(k.r, {
                onClick: function() {
                    return V(!0)
                }
            }, d.createElement(p.F, {
                scale: "L",
                color: "ACCENT"
            }, "Add a description"))), d.createElement(u.x, null, d.createElement(v.X, {
                checked: j,
                onChange: function() {
                    return R(!j)
                },
                textScale: "L"
            }, "Make it private")))))
        }
    }
    ,
    33974: (e,n,i)=>{
        "use strict";
        i.d(n, {
            S: ()=>a,
            I: ()=>t
        });
        var a = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "editCatalogItemsMutation_postViewerEdge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "PostViewerEdge"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "catalogsConnection"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "catalogsContainingThis"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "LISTS"
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "catalogId"
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "version"
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "catalogItemIds"
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "predefinedContainingThis"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "catalogId"
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "predefined"
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "version"
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "catalogItemIds"
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
          , t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "EditCatalogItems"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "catalogId"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "version"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "operations"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CatalogItemMutateOperationInput"
                                    }
                                }
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "editCatalogItems"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "catalogId"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "catalogId"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "version"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "version"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "operations"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "operations"
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "__typename"
                                }
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EditCatalogItemsSuccess"
                                    }
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "version"
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "operations"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "__typename"
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "preprend"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "__typename"
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "catalogItemId"
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "append"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "__typename"
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "catalogItemId"
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "move"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }
    ,
    54758: (e,n,i)=>{
        "use strict";
        i.d(n, {
            PH: ()=>I,
            xt: ()=>f,
            T2: ()=>S,
            qY: ()=>C,
            Yi: ()=>y,
            oj: ()=>b
        });
        var a = i(59713)
          , t = i.n(a)
          , d = i(63038)
          , l = i.n(d)
          , o = i(50361)
          , m = i.n(o)
          , r = i(21919)
          , s = i(67294)
          , u = i(12476)
          , c = i(18627)
          , k = i(75221)
          , v = i(11462)
          , g = i(33974);
        function p(e, n) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                n && (a = a.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                i.push.apply(i, a)
            }
            return i
        }
        function N(e) {
            for (var n = 1; n < arguments.length; n++) {
                var i = null != arguments[n] ? arguments[n] : {};
                n % 2 ? p(Object(i), !0).forEach((function(n) {
                    t()(e, n, i[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                }
                ))
            }
            return e
        }
        var I = "temp-cat-item-id"
          , f = "temp-cat-version";
        function S() {
            var e = (0,
            c.A)()
              , n = (0,
            s.useRef)()
              , i = (0,
            s.useRef)((function(i) {
                var a = n.current;
                a && "EditCatalogItemsSuccess" === i.editCatalogItems.__typename && a.kind === k.ej.POST && e.event("post.addToList", {
                    listId: a.catalogId,
                    postId: a.itemId
                })
            }
            )).current
              , a = (0,
            r.D)(g.I, {
                onCompleted: i
            })
              , t = l()(a, 1)[0];
            return (0,
            s.useCallback)((function(e) {
                n.current = e,
                t({
                    variables: {
                        catalogId: e.catalogId,
                        version: e.version,
                        operations: [{
                            preprend: {
                                type: e.kind,
                                id: e.itemId
                            }
                        }]
                    },
                    update: function(n, i) {
                        F({
                            viewerId: e.userId,
                            cache: n,
                            result: i,
                            catalogId: e.catalogId,
                            itemId: e.itemId,
                            kind: e.kind,
                            operation: "preprend",
                            predefined: e.predefined
                        }),
                        (0,
                        u.p9)(n, e.userId, k.HQ.LISTS, e.catalogId)
                    }
                })
            }
            ), [t])
        }
        function C(e, n, i, a, t, d) {
            var l = (0,
            c.A)();
            return (0,
            r.D)(g.I, {
                variables: {
                    catalogId: n,
                    version: i,
                    operations: [{
                        preprend: {
                            type: t,
                            id: a
                        }
                    }]
                },
                update: function(i, l) {
                    F({
                        viewerId: e,
                        cache: i,
                        result: l,
                        catalogId: n,
                        itemId: a,
                        kind: t,
                        operation: "preprend",
                        predefined: d
                    }),
                    d || (0,
                    u.p9)(i, e, k.HQ.LISTS, n),
                    (0,
                    u.Rx)(i, n, [a], t)
                },
                optimisticResponse: {
                    editCatalogItems: {
                        __typename: "EditCatalogItemsSuccess",
                        operations: [{
                            __typename: "EditCatalogItemMutationOperationResponse",
                            preprend: {
                                __typename: "CatalogItemV2",
                                catalogItemId: I
                            },
                            append: null,
                            move: null
                        }],
                        version: f
                    }
                },
                onCompleted: function(e) {
                    "EditCatalogItemsSuccess" === e.editCatalogItems.__typename && t === k.ej.POST && l.event("post.addToList", {
                        listId: n,
                        postId: a
                    })
                }
            })
        }
        var y = function(e, n, i, a, t, d) {
            var l = (0,
            c.A)()
              , o = a.map((function(e) {
                return e.catalogItemIds
            }
            )).flat();
            return (0,
            r.D)(g.I, {
                variables: {
                    catalogId: n,
                    version: i,
                    operations: o.map((function(e) {
                        return {
                            delete: {
                                itemId: e
                            }
                        }
                    }
                    ))
                },
                update: function(i, d) {
                    a.forEach((function(a) {
                        F({
                            viewerId: e,
                            cache: i,
                            result: d,
                            catalogId: n,
                            itemId: a.entityId,
                            kind: a.entityType,
                            operation: "delete",
                            predefined: t,
                            deletedCatalogItemIds: a.catalogItemIds
                        })
                    }
                    )),
                    (0,
                    u.S_)(i, n, o, k.ej.POST),
                    t || (0,
                    u.p9)(i, e, k.HQ.LISTS, n)
                },
                optimisticResponse: {
                    editCatalogItems: {
                        __typename: "EditCatalogItemsSuccess",
                        operations: a.map((function(e) {
                            return {
                                __typename: "EditCatalogItemMutationOperationResponse",
                                append: null,
                                preprend: null,
                                move: null
                            }
                        }
                        )),
                        version: f
                    }
                },
                onCompleted: function(e) {
                    if ("EditCatalogItemsSuccess" === (null == e ? void 0 : e.editCatalogItems.__typename)) {
                        d && d();
                        var i = a.length;
                        i > 1 ? l.event("list.itemsDeleted", {
                            listId: n,
                            itemsCount: i
                        }) : a[0].entityType === k.ej.POST && l.event("post.removeFromList", {
                            listId: n,
                            postId: a[0].entityId
                        })
                    }
                }
            })
        };
        function F(e) {
            var n, i, a, d = e.cache, l = e.result, o = e.catalogId, r = e.viewerId, s = e.itemId, c = e.kind, p = e.operation, I = e.predefined, f = e.deletedCatalogItemIds, S = null === (n = l.data) || void 0 === n ? void 0 : n.editCatalogItems;
            if ("EditCatalogItemsSuccess" === (null == S ? void 0 : S.__typename) && ((0,
            u.UV)(d, o, S.version),
            c === k.ej.POST)) {
                i = (0,
                v.Q)(s, r),
                "PostViewerEdge",
                a = g.S;
                var C = "".concat("PostViewerEdge", ":").concat(i)
                  , y = d.readFragment({
                    id: C,
                    fragment: a
                });
                if (null != y && y.catalogsConnection) {
                    var F = S.operations
                      , b = S.version
                      , T = F[0];
                    if (!T || "move" === p)
                        return;
                    var D = m()(I ? y.catalogsConnection.predefinedContainingThis : y.catalogsConnection.catalogsContainingThis)
                      , _ = D.findIndex((function(e) {
                        return I ? e.predefined === I : e.catalogId === o
                    }
                    ));
                    if ("append" === p || "preprend" === p) {
                        var h = T[p];
                        if (-1 !== _)
                            D[_].catalogItemIds.push(h.catalogItemId);
                        else {
                            var E = {
                                catalogId: o,
                                version: b,
                                catalogItemIds: [h.catalogItemId]
                            };
                            I && (E.predefined = I),
                            D.push(E)
                        }
                    } else if ("delete" === p && -1 !== _ && f) {
                        var V = D[_].catalogItemIds;
                        D[_].catalogItemIds = V.filter((function(e) {
                            return !f.includes(e)
                        }
                        )),
                        0 === D[_].catalogItemIds.length && D.splice(_, 1)
                    }
                    d.writeFragment({
                        id: C,
                        fragment: a,
                        data: N(N({}, y), {}, {
                            catalogsConnection: N(N({}, null == y ? void 0 : y.catalogsConnection), {}, t()({}, I ? "predefinedContainingThis" : "catalogsContainingThis", D))
                        })
                    })
                }
            }
        }
        function b(e, n, i, a) {
            return (0,
            r.D)(g.I, {
                variables: {
                    catalogId: e,
                    version: n,
                    operations: i
                },
                update: function(n) {
                    (0,
                    u.uA)(n, e)
                },
                onCompleted: a
            })
        }
    }
    ,
    11462: (e,n,i)=>{
        "use strict";
        function a(e, n) {
            return "postId:".concat(e, "-viewerId:").concat(n)
        }
        i.d(n, {
            Q: ()=>a
        })
    }
}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5203.972fb599.chunk.js.map
