;(function(wd, d) {
  wd.addEventListener(
    'load',
    function() {
      var num = 200,
        w = wd.innerWidth,
        h = wd.innerHeight,
        max = 100,
        _x = 0,
        _y = 0,
        _z = 150,
        PI = Math.PI,
        sin = Math.sin,
        cos = Math.cos,
        pow = Math.pow,
        sqrt = Math.sqrt,
        random = Math.random
      canvas = d.getElementById('canvas')

      var dtr = function(d) {
        return (d * PI) / 180
      }
      var rnd = function() {
        return sin((Math.floor(random() * 360) * PI) / 180)
      }
      var dist = function(p1, p2, p3) {
        return sqrt(pow(p2.x - p1.x, 2) + pow(p2.y - p1.y, 2) + pow(p2.z - p1.z, 2))
      }

      var cam = {
        obj: {
          x: _x,
          y: _y,
          z: _z,
        },
        dest: {
          x: 0,
          y: 0,
          z: 1,
        },
        dist: {
          x: 0,
          y: 0,
          z: 200,
        },
        ang: {
          cplane: 0,
          splane: 0,
          ctheta: 0,
          stheta: 0,
        },
        zoom: 1,
        disp: {
          x: w / 2,
          y: h / 2,
          z: 0,
        },
        upd: function() {
          cam.dist.x = cam.dest.x - cam.obj.x
          cam.dist.y = cam.dest.y - cam.obj.y
          cam.dist.z = cam.dest.z - cam.obj.z
          cam.ang.cplane = -cam.dist.z / sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z)
          cam.ang.splane = cam.dist.x / sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z)
          cam.ang.ctheta =
            sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z) /
            sqrt(cam.dist.x * cam.dist.x + cam.dist.y * cam.dist.y + cam.dist.z * cam.dist.z)
          cam.ang.stheta =
            -cam.dist.y /
            sqrt(cam.dist.x * cam.dist.x + cam.dist.y * cam.dist.y + cam.dist.z * cam.dist.z)
        },
      }

      var trans = {
        parts: {
          sz: function(p, sz) {
            return {
              x: p.x * sz.x,
              y: p.y * sz.y,
              z: p.z * sz.z,
            }
          },
          rot: {
            x: function(p, rot) {
              return {
                x: p.x,
                y: p.y * cos(dtr(rot.x)) - p.z * sin(dtr(rot.x)),
                z: p.y * sin(dtr(rot.x)) + p.z * cos(dtr(rot.x)),
              }
            },
            y: function(p, rot) {
              return {
                x: p.x * cos(dtr(rot.y)) + p.z * sin(dtr(rot.y)),
                y: p.y,
                z: -p.x * sin(dtr(rot.y)) + p.z * cos(dtr(rot.y)),
              }
            },
            z: function(p, rot) {
              return {
                x: p.x * cos(dtr(rot.z)) - p.y * sin(dtr(rot.z)),
                y: p.x * sin(dtr(rot.z)) + p.y * cos(dtr(rot.z)),
                z: p.z,
              }
            },
          },
          pos: function(p, pos) {
            return {
              x: p.x + pos.x,
              y: p.y + pos.y,
              z: p.z + pos.z,
            }
          },
        },
        pov: {
          plane: function(p) {
            return {
              x: p.x * cam.ang.cplane + p.z * cam.ang.splane,
              y: p.y,
              z: p.x * -cam.ang.splane + p.z * cam.ang.cplane,
            }
          },
          theta: function(p) {
            return {
              x: p.x,
              y: p.y * cam.ang.ctheta - p.z * cam.ang.stheta,
              z: p.y * cam.ang.stheta + p.z * cam.ang.ctheta,
            }
          },
          set: function(p) {
            return {
              x: p.x - cam.obj.x,
              y: p.y - cam.obj.y,
              z: p.z - cam.obj.z,
            }
          },
        },
        persp: function(p) {
          return {
            x: ((p.x * cam.dist.z) / p.z) * cam.zoom,
            y: ((p.y * cam.dist.z) / p.z) * cam.zoom,
            z: p.z * cam.zoom,
            p: cam.dist.z / p.z,
          }
        },
        disp: function(p, disp) {
          return {
            x: p.x + disp.x,
            y: -p.y + disp.y,
            z: p.z + disp.z,
            p: p.p,
          }
        },
        steps: function(_obj_, sz, rot, pos, disp) {
          var _args = trans.parts.sz(_obj_, sz)
          _args = trans.parts.rot.x(_args, rot)
          _args = trans.parts.rot.y(_args, rot)
          _args = trans.parts.rot.z(_args, rot)
          _args = trans.parts.pos(_args, pos)
          _args = trans.pov.plane(_args)
          _args = trans.pov.theta(_args)
          _args = trans.pov.set(_args)
          _args = trans.persp(_args)
          _args = trans.disp(_args, disp)
          return _args
        },
      }

      ;(function() {
        'use strict'
        var ThreeD = function(param) {
          this.transIn = {}
          this.transOut = {}
          this.transIn.vtx = param.vtx
          this.transIn.sz = param.sz
          this.transIn.rot = param.rot
          this.transIn.pos = param.pos
        }

        ThreeD.prototype.vupd = function() {
          this.transOut = trans.steps(
            this.transIn.vtx,
            this.transIn.sz,
            this.transIn.rot,
            this.transIn.pos,
            cam.disp,
          )
        }

        var Build = function() {
          this.vel = 0.04
          this.lim = 360
          this.diff = 200
          this.initPos = 100
          this.toX = _x
          this.toY = _y
          this.go()
        }

        Build.prototype.go = function() {
          var cWidth = wd.innerWidth
          var cHeight = wd.innerHeight
          this.canvas = canvas
          this.canvas.width = cWidth
          this.canvas.height = cHeight
          this.$ = this.canvas.getContext('2d')
          this.$.globalCompositeOperation = 'source-over'
          this.varr = []
          this.dist = []
          this.calc = []

          for (var i = 0, len = num; i < len; i++) {
            this.add()
          }

          this.rotObj = {
            x: 0,
            y: 0,
            z: 0,
          }
          this.objSz = {
            x: w / 5,
            y: h / 5,
            z: w / 5,
          }
        }

        Build.prototype.add = function() {
          this.varr.push(
            new ThreeD({
              vtx: {
                x: rnd(),
                y: rnd(),
                z: rnd(),
              },
              sz: {
                x: 0,
                y: 0,
                z: 0,
              },
              rot: {
                x: 20,
                y: -20,
                z: 0,
              },
              pos: {
                x: this.diff * sin((360 * random() * PI) / 180),
                y: this.diff * sin((360 * random() * PI) / 180),
                z: this.diff * sin((360 * random() * PI) / 180),
              },
            }),
          )
          this.calc.push({
            x: 360 * random(),
            y: 360 * random(),
            z: 360 * random(),
          })
        }

        Build.prototype.upd = function() {
          cam.obj.x += (this.toX - cam.obj.x) * 0.05
          cam.obj.y += (this.toY - cam.obj.y) * 0.05
        }

        Build.prototype.draw = function() {
          this.$.clearRect(0, 0, this.canvas.width, this.canvas.height)
          cam.upd()
          this.rotObj.x += 0.1
          this.rotObj.y += 0.1
          this.rotObj.z += 0.1

          for (var i = 0; i < this.varr.length; i++) {
            for (var val in this.calc[i]) {
              if (this.calc[i].hasOwnProperty(val)) {
                this.calc[i][val] += this.vel
                if (this.calc[i][val] > this.lim) this.calc[i][val] = 0
              }
            }

            this.varr[i].transIn.pos = {
              x: this.diff * cos((this.calc[i].x * PI) / 180),
              y: this.diff * sin((this.calc[i].y * PI) / 180),
              z: this.diff * sin((this.calc[i].z * PI) / 180),
            }
            this.varr[i].transIn.rot = this.rotObj
            this.varr[i].transIn.sz = this.objSz
            this.varr[i].vupd()
            if (this.varr[i].transOut.p < 0) continue
            var g = this.$.createRadialGradient(
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p,
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p * 2,
            )
            this.$.globalCompositeOperation = 'lighter'
            g.addColorStop(0, 'hsla(255, 255%, 255%, 1)')
            g.addColorStop(0.5, 'hsla(' + (i + 2) + ',85%, 40%,1)')
            g.addColorStop(1, 'hsla(' + i + ',85%, 40%,.5)')
            this.$.fillStyle = g
            this.$.beginPath()
            this.$.arc(
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p * 2,
              0,
              PI * 2,
              false,
            )
            this.$.fill()
            this.$.closePath()
          }
        }
        Build.prototype.anim = function() {
          wd.requestAnimationFrame = (function() {
            return (
              wd.requestAnimationFrame ||
              function(callback, element) {
                wd.setTimeout(callback, 1000 / 60)
              }
            )
          })()
          var anim = function() {
            this.upd()
            this.draw()
            wd.requestAnimationFrame(anim)
          }.bind(this)
          wd.requestAnimationFrame(anim)
        }

        Build.prototype.run = function() {
          this.anim()

          wd.addEventListener(
            'mousemove',
            function(e) {
              this.toX = (e.clientX - this.canvas.width / 2) * -0.8
              this.toY = (e.clientY - this.canvas.height / 2) * 0.8
            }.bind(this),
          )
          wd.addEventListener(
            'touchmove',
            function(e) {
              e.preventDefault()
              this.toX = (e.touches[0].clientX - this.canvas.width / 2) * -0.8
              this.toY = (e.touches[0].clientY - this.canvas.height / 2) * 0.8
            }.bind(this),
          )
          wd.addEventListener(
            'mousedown',
            function(e) {
              this.add()
            }.bind(this),
          )
          wd.addEventListener(
            'touchstart',
            function(e) {
              e.preventDefault()
              this.add()
            }.bind(this),
          )
        }
        var app = new Build()
        app.run()

        wd.addEventListener('resize', function(e) {
          canvas.width = w = wd.innerWidth
          canvas.height = h = wd.innerHeight
          app = new Build()
          app.run()
        })
      })()
    },
    false,
  )
})(window, document)
