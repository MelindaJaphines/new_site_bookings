(self.webpackChunklite = self.webpackChunklite || []).push([[1957], {
    57477: (e,n,i)=>{
        "use strict";
        i.d(n, {
            _C: ()=>r,
            $l: ()=>c
        });
        var a = i(319)
          , t = i.n(a)
          , d = i(33974)
          , l = i(12746)
          , o = i(88398)
          , r = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "AddToCatalogBase_post"
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
                            value: "isPublished"
                        }
                    }]
                }
            }]
        }
          , s = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "AddToCatalogBaseQuery_post"
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
                                                    value: "catalogItemIds"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "editCatalogItemsMutation_postViewerEdge"
                                }
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "useAddItemToPredefinedCatalog_postViewerEdge"
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "WithToggleInsideCatalog_post"
                        }
                    }]
                }
            }].concat(t()(d.S.definitions), t()(l.F.definitions), t()(o.m.definitions))
        }
          , c = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AddToCatalogBaseQuery"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "postId"
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
                            value: "isPostKind"
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
                        name: {
                            kind: "Name",
                            value: "postResult"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "postId"
                                }
                            }
                        }],
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
                                        value: "isPostKind"
                                    }
                                }
                            }]
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
                                        value: "Post"
                                    }
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "AddToCatalogBaseQuery_post"
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }].concat(t()(s.definitions))
        }
    }
    ,
    65331: (e,n,i)=>{
        "use strict";
        i.d(n, {
            a: ()=>ae
        });
        var a = i(67154)
          , t = i.n(a)
          , d = i(6479)
          , l = i.n(d)
          , o = i(63038)
          , r = i.n(o)
          , s = i(64718)
          , c = i(67294)
          , u = i(59713)
          , m = i.n(u)
          , k = i(319)
          , v = i.n(k)
          , p = i(39210)
          , g = i(65368)
          , f = i(77355)
          , N = i(93310)
          , y = i(87691)
          , b = i(14646)
          , C = i(78285)
          , S = i(14813)
          , I = i(87529)
          , P = i(31379)
          , h = i(75221);
        function T() {
            return (T = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = arguments[n];
                    for (var a in i)
                        Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var E = c.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.73 3.08A2.21 2.21 0 0 1 5 .94c1.26 0 2.27.97 2.27 2.14v2.44H2.73V3.08zm5.46 2.44V3.08C8.18 1.38 6.74 0 5 0a3.13 3.13 0 0 0-3.18 3.08v2.44c-.49 0-.95.2-1.29.55A1.9 1.9 0 0 0 0 7.39v3.74a1.9 1.9 0 0 0 .53 1.32A1.8 1.8 0 0 0 1.8 13H8.2c.48 0 .94-.2 1.28-.55.34-.35.53-.82.53-1.32V7.4a1.9 1.9 0 0 0-.53-1.32 1.8 1.8 0 0 0-1.28-.55z",
            fill: "#A8A8A8"
        });
        const O = function(e) {
            return c.createElement("svg", T({
                width: 10,
                height: 13,
                viewBox: "0 0 10 13",
                fill: "none"
            }, e), E)
        };
        var w = i(92305)
          , F = i(54758);
        function D(e) {
            var n, i, a = e.children, t = e.target, d = e.kind, l = e.catalog, o = e.viewer, s = c.useMemo((function() {
                if (l.predefined) {
                    var e, n = null === (e = t.viewerEdge.catalogsConnection) || void 0 === e ? void 0 : e.predefinedContainingThis.find((function(e) {
                        return e.predefined === l.predefined
                    }
                    ));
                    return [!!n, null == n ? void 0 : n.catalogItemIds]
                }
                var i, a = null === (i = t.viewerEdge.catalogsConnection) || void 0 === i ? void 0 : i.catalogsContainingThis.find((function(e) {
                    return e.catalogId === l.id
                }
                ));
                return [!!a, null == a ? void 0 : a.catalogItemIds]
            }
            ), [l.predefined, l.id, t.viewerEdge]), u = r()(s, 2), m = u[0], k = u[1], v = (0,
            F.qY)(o.id, l.id, l.version, t.id, d, null !== (n = l.predefined) && void 0 !== n ? n : void 0), p = r()(v, 2), g = p[0], f = p[1].loading, N = (0,
            F.Yi)(o.id, l.id, l.version, [{
                entityId: t.id,
                entityType: d,
                catalogItemIds: k || []
            }], null !== (i = l.predefined) && void 0 !== i ? i : void 0), y = r()(N, 2), b = y[0], C = y[1].loading;
            return a({
                toggleInsideCatalog: m ? b : g,
                isInsideCatalog: m,
                loading: f || C
            })
        }
        var V = {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "16px",
            paddingRight: "5px"
        }
          , _ = function(e) {
            return {
                marginBottom: "1px",
                "& path": {
                    fill: e.colorTokens.border.neutral.secondary.base
                }
            }
        };
        function j(e) {
            var n = e.catalog
              , i = e.target
              , a = e.kind
              , t = e.viewer
              , d = (0,
            b.I)();
            return c.createElement(D, {
                viewer: t,
                target: i,
                kind: a,
                catalog: n
            }, (function(e) {
                var i = e.toggleInsideCatalog
                  , a = e.isInsideCatalog
                  , t = e.loading
                  , l = n.predefined ? (0,
                w.S6)(n.predefined) : n.name;
                return c.createElement("div", {
                    className: d(V)
                }, c.createElement(P.X, {
                    key: n.id,
                    checked: a,
                    checkboxStyle: "OBVIOUS",
                    onChange: i,
                    disabled: t || n.visibility === h.n2.LOCKED,
                    textScale: "L",
                    clampText: 1
                }, l), n.visibility !== h.n2.PUBLIC && c.createElement(f.x, {
                    paddingLeft: "8px"
                }, c.createElement(O, {
                    className: d(_)
                })))
            }
            ))
        }
        function A(e) {
            var n = e.target
              , i = e.kind
              , a = e.catalogs
              , t = e.isLoading
              , d = e.viewer
              , l = e.fetchMore
              , o = e.scrollableEl;
            return t ? c.createElement(f.x, {
                display: "flex",
                justifyContent: "center",
                padding: "40px 0"
            }, c.createElement(y.F, {
                color: "DARKER",
                scale: "L",
                tag: "div"
            }, c.createElement(I.T, null))) : a ? c.createElement(S.P, {
                fetchMore: l,
                scrollableEl: o
            }, a.map((function(e) {
                return c.createElement(j, {
                    viewer: d,
                    key: e.id,
                    catalog: e,
                    target: n,
                    kind: i
                })
            }
            ))) : null
        }
        function x(e, n) {
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
        function L(e) {
            for (var n = 1; n < arguments.length; n++) {
                var i = null != arguments[n] ? arguments[n] : {};
                n % 2 ? x(Object(i), !0).forEach((function(n) {
                    m()(e, n, i[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : x(Object(i)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                }
                ))
            }
            return e
        }
        var R = {
            maxHeight: "240px",
            overflowY: "auto",
            padding: "24px 20px 16px 24px"
        };
        function M(e) {
            var n, i, a, t = e.target, d = e.kind, l = e.showCreateModal, o = e.hidePanel, r = e.viewer, u = e.addToPredefinedLoading, m = c.useRef(null), k = (0,
            b.I)(), S = (0,
            p.Ln)({
                limit: p.W,
                userId: r.id
            }), I = (0,
            C.w)(), P = (0,
            s.a)(g.D, {
                variables: S,
                skip: u
            }), h = P.data, T = P.error, E = P.loading, O = P.fetchMore, w = u || E;
            c.useEffect((function() {
                T && I({
                    toastStyle: "RETRYABLE_ERROR",
                    duration: 4e3
                })
            }
            ), [T]);
            var F, D = c.useCallback((function() {
                l(),
                o()
            }
            ), [l, o]), V = null == h ? void 0 : h.catalogsByUser.catalogs;
            return V && "Catalog" === (null == h || null === (n = h.readingList) || void 0 === n ? void 0 : n.__typename) && (V = [h.readingList].concat(v()(V))),
            null != h && null !== (i = h.catalogsByUser) && void 0 !== i && null !== (a = i.paging) && void 0 !== a && a.nextPageCursor && (F = function() {
                return O({
                    variables: L(L({}, S), {}, {
                        pagingOptions: L(L({}, S.pagingOptions), {}, {
                            cursor: {
                                id: h.catalogsByUser.paging.nextPageCursor.id
                            }
                        })
                    })
                })
            }
            ),
            c.createElement(f.x, {
                width: "300px"
            }, c.createElement("div", {
                className: k(R),
                ref: m
            }, c.createElement(A, {
                target: t,
                kind: d,
                viewer: r,
                catalogs: V,
                isLoading: w,
                fetchMore: F,
                scrollableEl: m.current
            })), !w && c.createElement(f.x, {
                borderTop: "BASE_LIGHTER",
                padding: "20px 24px 24px"
            }, c.createElement(y.F, {
                color: "ACCENT",
                scale: "L"
            }, c.createElement(N.r, {
                onClick: D
            }, "Create new list"))))
        }
        var B = i(63508)
          , H = i(50361)
          , K = i.n(H)
          , Q = i(21919)
          , U = i(12476)
          , z = i(18627)
          , Y = i(11462)
          , q = i(12746);
        function G(e, n) {
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
        function J(e) {
            for (var n = 1; n < arguments.length; n++) {
                var i = null != arguments[n] ? arguments[n] : {};
                n % 2 ? G(Object(i), !0).forEach((function(n) {
                    m()(e, n, i[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : G(Object(i)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                }
                ))
            }
            return e
        }
        var W = "temp-catalog-id"
          , Z = i(73917)
          , $ = i(66227)
          , X = i(68894)
          , ee = i(57477)
          , ne = i(62212);
        function ie(e) {
            var n = e.children
              , i = e.isPanelVisible
              , a = e.hidePanel
              , t = e.togglePanel
              , d = e.target
              , l = e.kind
              , o = e.viewer
              , s = e.bookmarkIcon
              , u = e.isInACatalog
              , m = e.isInReadingList
              , k = e.catalogsCount
              , v = e.popoverDisplay
              , p = (0,
            X.O)(!1)
              , g = r()(p, 3)
              , f = g[0]
              , N = g[1]
              , y = g[2]
              , b = function(e, n, i, a) {
                var t = (0,
                z.A)()
                  , d = (0,
                Q.D)(q.Q, {
                    variables: {
                        type: n,
                        operation: {
                            preprend: {
                                type: a,
                                id: i
                            }
                        }
                    },
                    optimisticResponse: {
                        addToPredefinedCatalog: {
                            __typename: "AddToPredefinedCatalogSucces",
                            version: F.xt,
                            insertedItem: {
                                __typename: "CatalogItemV2",
                                catalogId: W,
                                catalogItemId: F.PH
                            }
                        }
                    },
                    onCompleted: function(e) {
                        if ("AddToPredefinedCatalogSucces" === e.addToPredefinedCatalog.__typename && a === h.ej.POST) {
                            var n = e.addToPredefinedCatalog.insertedItem;
                            t.event("post.addToList", {
                                listId: n.catalogId,
                                postId: n.catalogItemId
                            })
                        }
                    },
                    update: function(t, d) {
                        var l, o = null === (l = d.data) || void 0 === l ? void 0 : l.addToPredefinedCatalog;
                        if ("AddToPredefinedCatalogSucces" === (null == o ? void 0 : o.__typename)) {
                            var r, s, c = o.insertedItem, u = o.version;
                            if (c.catalogId !== W && ((0,
                            U.UV)(t, c.catalogId, u),
                            (0,
                            U.Rx)(t, c.catalogId, [c.catalogItemId], a)),
                            a === h.ej.POST) {
                                r = "PostViewerEdge:".concat((0,
                                Y.Q)(i, e)),
                                s = q.F;
                                var m = t.readFragment({
                                    id: r,
                                    fragment: s
                                });
                                if (null != m && m.catalogsConnection) {
                                    var k = K()(m.catalogsConnection.predefinedContainingThis)
                                      , v = k.findIndex((function(e) {
                                        return e.predefined === n
                                    }
                                    ));
                                    if (-1 !== v)
                                        k[v].catalogItemIds.push(c.catalogItemId);
                                    else {
                                        var p = {
                                            catalogId: c.catalogId,
                                            predefined: n,
                                            version: u,
                                            catalogItemIds: [c.catalogItemId]
                                        };
                                        k.push(p)
                                    }
                                    t.writeFragment({
                                        id: r,
                                        fragment: s,
                                        data: J(J({}, m), {}, {
                                            catalogsConnection: J(J({}, m.catalogsConnection), {}, {
                                                predefinedContainingThis: k
                                            })
                                        })
                                    })
                                }
                            }
                        }
                    }
                })
                  , l = r()(d, 2);
                return {
                    addToPredefined: l[0],
                    addToPredefinedLoading: l[1].loading
                }
            }(o.id, h.l8.READING_LIST, d.id, l)
              , C = b.addToPredefined
              , S = b.addToPredefinedLoading
              , I = c.useCallback((function() {
                t(),
                m || u || C()
            }
            ), [t, u, m, C]);
            return c.createElement(Z.J, {
                isVisible: i,
                popoverRenderFn: function() {
                    return c.createElement(M, {
                        showCreateModal: N,
                        hidePanel: a,
                        target: d,
                        kind: l,
                        viewer: o,
                        addToPredefinedLoading: S
                    })
                },
                hide: a,
                targetDistance: 15,
                display: v
            }, c.createElement(B.a, {
                isVisible: f,
                hide: y,
                target: d,
                kind: l,
                viewer: o
            }), null == n ? void 0 : n({
                onClick: I,
                bookmarkIcon: s,
                catalogsCount: k,
                isPanelVisible: i
            }))
        }
        function ae(e) {
            var n, i, a, d = e.viewer, o = e.defaultToBookmarkIcon, r = l()(e, ["viewer", "defaultToBookmarkIcon"]), u = c.useMemo((function() {
                return r.kind === h.ej.POST ? {
                    postId: r.target.id,
                    isPostKind: !0
                } : {
                    postId: "",
                    isPostKind: !1
                }
            }
            ), [r.kind, r.target]), m = (0,
            s.a)(ee.$l, {
                ssr: !1,
                variables: u
            }).data, k = null, v = null;
            "Post" === (null == m || null === (n = m.postResult) || void 0 === n ? void 0 : n.__typename) && (k = m.postResult.viewerEdge.catalogsConnection,
            v = m.postResult);
            var p = (null === (i = k) || void 0 === i ? void 0 : i.catalogsContainingThis) && k.catalogsContainingThis.length > 0
              , g = c.useMemo((function() {
                var e, n;
                return !!(null === (e = k) || void 0 === e || null === (n = e.predefinedContainingThis) || void 0 === n ? void 0 : n.find((function(e) {
                    return e.predefined === h.l8.READING_LIST
                }
                )))
            }
            ), [k])
              , f = c.useMemo((function() {
                var e;
                return ((null === (e = k) || void 0 === e ? void 0 : e.catalogsContainingThis.length) || 0) + (g ? 1 : 0)
            }
            ), [null === (a = k) || void 0 === a ? void 0 : a.catalogsContainingThis.length, g])
              , N = c.createElement(ne.l, {
                insideACatalog: !!p || g
            });
            return u.isPostKind ? d && k && v ? c.createElement($.B, null, (function(e) {
                var n = e.isVisible
                  , i = e.toggle
                  , a = e.hide;
                return c.createElement(ie, t()({}, r, {
                    target: v,
                    viewer: d,
                    isPanelVisible: n,
                    togglePanel: i,
                    hidePanel: a,
                    bookmarkIcon: N,
                    isInACatalog: !!p,
                    isInReadingList: g,
                    catalogsCount: f
                }))
            }
            )) : o || !r.children ? N : r.children({
                onClick: function() {
                    return null
                },
                bookmarkIcon: N,
                catalogsCount: f,
                isPanelVisible: !1,
                isDisabled: !0
            }) : null
        }
    }
    ,
    62212: (e,n,i)=>{
        "use strict";
        i.d(n, {
            l: ()=>p,
            K: ()=>u
        });
        var a = i(67294)
          , t = i(14646);
        function d() {
            return (d = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = arguments[n];
                    for (var a in i)
                        Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var l = a.createElement("path", {
            d: "M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z",
            fill: "#000"
        });
        const o = function(e) {
            return a.createElement("svg", d({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none"
            }, e), l)
        };
        function r() {
            return (r = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = arguments[n];
                    for (var a in i)
                        Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = a.createElement("path", {
            d: "M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z",
            fill: "#000"
        });
        const c = function(e) {
            return a.createElement("svg", r({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none"
            }, e), s)
        };
        var u = function(e) {
            return {
                "& path": {
                    fill: e.colorTokens.border.neutral.secondary.base
                }
            }
        }
          , m = function(e) {
            return {
                "& path": {
                    fill: e.colorTokens.foreground.neutral.primary.hover
                }
            }
        }
          , k = function() {
            var e = (0,
            t.I)();
            return a.createElement(o, {
                className: e(u)
            })
        }
          , v = function() {
            var e = (0,
            t.I)();
            return a.createElement(c, {
                className: e(m)
            })
        };
        function p(e) {
            return e.insideACatalog ? a.createElement(v, null) : a.createElement(k, null)
        }
    }
    ,
    12746: (e,n,i)=>{
        "use strict";
        i.d(n, {
            F: ()=>a,
            Q: ()=>t
        });
        var a = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "useAddItemToPredefinedCatalog_postViewerEdge"
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
                                            value: "version"
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
                    value: "AddToPredefinedCatalog"
                },
                variableDefinitions: [{
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
                                value: "PredefinedCatalogType"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "operation"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "PredefinedCatalogAddOperationInput"
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
                            value: "addToPredefinedCatalog"
                        },
                        arguments: [{
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "operation"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "operation"
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
                                        value: "AddToPredefinedCatalogSucces"
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
                                            value: "insertedItem"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "catalogId"
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
    46732: (e,n,i)=>{
        "use strict";
        i.d(n, {
            JP: ()=>l,
            cZ: ()=>o
        });
        var a = i(319)
          , t = i.n(a)
          , d = i(1877)
          , l = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "ClapMutation_post"
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
                            value: "__typename"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clapCount"
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "MultiVoteCount_post"
                        }
                    }]
                }
            }].concat(t()(d.U.definitions))
        }
          , o = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ClapMutation"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "targetPostId"
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
                            value: "numClaps"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
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
                            value: "clap"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "targetPostId"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "targetPostId"
                                }
                            }
                        }, {
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
                                value: "numClaps"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "numClaps"
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "viewerEdge"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "ClapMutation_viewerEdge"
                                        }
                                    }]
                                }
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "ClapMutation_post"
                                }
                            }]
                        }
                    }]
                }
            }].concat(t()([{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "ClapMutation_viewerEdge"
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
                            value: "__typename"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clapCount"
                        }
                    }]
                }
            }]), t()(l.definitions))
        }
    }
    ,
    13195: (e,n,i)=>{
        "use strict";
        i.d(n, {
            C: ()=>k
        });
        var a = i(59713)
          , t = i.n(a)
          , d = i(63038)
          , l = i.n(d)
          , o = i(21919)
          , r = i(67294)
          , s = i(11462)
          , c = i(46732);
        function u(e, n) {
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
        function m(e) {
            for (var n = 1; n < arguments.length; n++) {
                var i = null != arguments[n] ? arguments[n] : {};
                n % 2 ? u(Object(i), !0).forEach((function(n) {
                    t()(e, n, i[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                }
                ))
            }
            return e
        }
        var k = function() {
            var e = (0,
            o.D)(c.cZ)
              , n = l()(e, 1)[0];
            return (0,
            r.useCallback)((function(e, i, a, t) {
                var d;
                return n({
                    variables: {
                        targetPostId: e.id,
                        userId: i,
                        numClaps: a
                    },
                    optimisticResponse: {
                        clap: m(m({
                            __typename: "Post"
                        }, e), {}, {
                            clapCount: (null !== (d = e.clapCount) && void 0 !== d ? d : 0) + a,
                            viewerEdge: {
                                __typename: "PostViewerEdge",
                                id: (0,
                                s.Q)(e.id, i),
                                clapCount: a
                            }
                        })
                    },
                    update: function(n, d) {
                        var l, o = null == d || null === (l = d.data) || void 0 === l ? void 0 : l.clap;
                        o && (n.modify({
                            id: "Post:".concat(o.id),
                            fields: {
                                clapCount: function() {
                                    var n;
                                    return (null !== (n = e.clapCount) && void 0 !== n ? n : 0) + a
                                }
                            }
                        }),
                        n.modify({
                            id: "PostViewerEdge:".concat((0,
                            s.Q)(o.id, i)),
                            fields: {
                                clapCount: function() {
                                    return ((null == t ? void 0 : t.clapCount) || 0) + a
                                }
                            }
                        }))
                    }
                })
            }
            ), [])
        }
    }
    ,
    1877: (e,n,i)=>{
        "use strict";
        i.d(n, {
            U: ()=>a
        });
        var a = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "MultiVoteCount_post"
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
                    }]
                }
            }]
        }
    }
    ,
    39507: (e,n,i)=>{
        "use strict";
        i.d(n, {
            T: ()=>d
        });
        var a = i(64718)
          , t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PostViewerEdgeQuery"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "postId"
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
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "post"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "postId"
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "InlineFragment",
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
                                                    value: "__typename"
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clapCount"
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "readingList"
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "shareKey"
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "creatorPartnerProgramEnrollmentStatus"
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
          , d = function(e) {
            var n, i = (0,
            a.a)(t, {
                variables: {
                    postId: (null == e ? void 0 : e.id) || ""
                },
                ssr: !1,
                skip: !(null != e && e.id)
            }), d = i.loading, l = i.error, o = i.data;
            return d ? {
                loading: d
            } : l ? {
                error: l
            } : {
                viewerEdge: null == o || null === (n = o.post) || void 0 === n ? void 0 : n.viewerEdge
            }
        }
    }
    ,
    51681: (e,n,i)=>{
        "use strict";
        function a(e, n, i) {
            return !!n && e[n.id] || {
                clapCount: (null == n ? void 0 : n.clapCount) || 0,
                viewerClapCount: (null == i ? void 0 : i.clapCount) || 0,
                viewerHasClappedSinceFetch: !1
            }
        }
        i.d(n, {
            l: ()=>a
        })
    }
}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1957.8b8ca9f7.chunk.js.map
