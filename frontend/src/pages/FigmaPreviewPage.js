import React, { useEffect } from 'react';

/**
 * Developer-only page to preview styles influenced by Figma extracted assets.
 * We include the asset CSS within a sandboxed container so it doesn't leak.
 */
export default function FigmaPreviewPage() {
  useEffect(() => {
    document.title = 'Figma Dev Preview • Simple Notes';
  }, []);

  return (
    <section>
      <h2>Figma Dev Preview</h2>
      <p className="muted">This page renders a simplified version of the extracted screen for visual parity of colors and spacings.</p>
      <div style={{ overflow: 'auto', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 8 }}>
        <div style={{ minWidth: 960 }}>
          <style>
            {`@import url('/assets/common.css');@import url('/assets/macbook-pro-2-3-40.css');`}
          </style>
          <div className="figma-screen screen-macbook-pro-2-3-40" role="presentation" style={{ margin: '0 auto' }}>
            <img className="abs el-3-41 img-cover" src="/assets/figma_image_3_41.png" alt="" width="53" height="53" />
            <div className="abs el-3-47">
              <div className="abs el-3-42">Spazio di Salvatore 🍭</div>
              <div className="abs el-3-46" />
            </div>
            <div className="abs el-3-50" aria-hidden="true"></div>
            <div className="abs el-3-82">
              <div className="abs el-5-150">
                <div className="abs el-3-51">Sezioni</div>
                <div className="abs el-11-90">
                  <div className="abs el-11-95"></div>
                  <div className="abs el-5-151" aria-hidden="true"></div>
                </div>
              </div>
              <div className="abs el-3-81">
                <div className="abs el-3-76">
                  <div className="abs el-3-67">👋 Dashboard</div>
                </div>
                <div className="abs el-3-77">
                  <div className="abs el-3-78">🖌 Sketches</div>
                </div>
                <div className="abs el-3-79">
                  <div className="abs el-3-80">🛍 Shopping list</div>
                </div>
              </div>
            </div>
            <div className="abs el-3-129">
              <div className="abs el-3-127">dashboard /</div>
              <div className="abs el-3-128">generale</div>
            </div>
            <div className="abs el-3-83">
              <div className="abs el-3-85">
                <div className="abs el-3-86"><div className="abs el-3-87">Generale</div></div>
                <div className="abs el-3-88"><div className="abs el-3-89">Calendario delle lezioni</div></div>
                <div className="abs el-3-95"><div className="abs el-3-96">Lista delle cose da fare</div></div>
                <div className="abs el-3-97"><div className="abs el-3-98">Prenotazioni classi</div></div>
                <div className="abs el-11-82">
                  <div className="abs el-11-87"></div>
                  <div className="abs el-11-83">New page</div>
                </div>
              </div>
            </div>
            <div className="abs el-3-130">Generale</div>
            <div className="abs el-3-138">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="abs el-9-4">Aenean maximus ullamcorper est...</div>
            <div className="abs el-9-5"><img src="/assets/figma_image_9_5.png" alt="" /></div>
            <div className="abs el-9-6">Description of this picture.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
